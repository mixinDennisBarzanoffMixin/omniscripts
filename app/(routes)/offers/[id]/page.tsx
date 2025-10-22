"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Printer } from "lucide-react";
import { OFFERS, COMPANY_DATA, calculateInvoiceTotal, addDays, OFFER_UI_TRANSLATIONS } from "@/app/_data/offers";
import { COMPANY_DATA_EN } from "@/app/_data/contracts";

const OFFER_TRANSLATIONS = OFFER_UI_TRANSLATIONS as any;

export default function OfferViewPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const offerId = params.id as string;
  const offer = OFFERS.find(o => o.id === offerId);
  // Language comes from offer props; fallback to query or 'bg'
  const langFromOffer = (offer?.language as 'bg'|'en'|'it'|undefined);
  const langParam = (searchParams?.get('lang') || '').toLowerCase();
  const lang = langFromOffer || ((['bg','en','it'] as const).includes(langParam as any) ? (langParam as 'bg'|'en'|'it') : 'bg');
  const t = OFFER_TRANSLATIONS[lang];
  const currency = offer?.currency || 'EUR';
  const formatAmount = (value: number) => {
    try {
      return new Intl.NumberFormat(lang === 'it' ? 'it-IT' : lang === 'bg' ? 'bg-BG' : 'en-GB', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
      }).format(value);
    } catch {
      return `${value.toFixed(2)} €`;
    }
  };

  useEffect(() => {
    document.title = offer ? `Offer ${offer.number} | OmniScripts` : `Offer ${offerId} | OmniScripts`;
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          router.push('/login');
        }
      } catch (_) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router, offerId, offer]);

  const calculatedData = useMemo(() => {
    if (!offer) return null;
    const calculations = calculateInvoiceTotal(offer.services as any);
    const validUntil = addDays(offer.date, offer.validForDays);
    return {
      ...calculations,
      validUntil,
    };
  }, [offer]);

  const handlePrint = () => window.print();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'accepted':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{t.statuses.accepted}</Badge>;
      case 'sent':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{t.statuses.sent}</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{t.statuses.draft}</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{t.statuses.rejected}</Badge>;
      case 'expired':
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">{t.statuses.expired}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  if (!offer || !calculatedData) {
    return (
      <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t.notFound}</h1>
          <Button onClick={() => router.push('/offers')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backToOffers}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Controls (hidden in print) */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => router.push('/offers')}
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.back}
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600"
          >
            <Printer className="mr-2 h-4 w-4" />
            {t.print}
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-4xl print:mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-t-xl print:rounded-none text-white">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/80 border border-white/30 flex items-center justify-center">
                <img src="/logo.png" alt="OmniScripts" width={40} height={40} />
              </div>
              <div>
                <h1 className="text-xl font-bold">{COMPANY_DATA.name}</h1>
                <p className="text-brand-100 text-sm">{COMPANY_DATA.nameEn}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold leading-none">{t.offer}</div>
              <div className="text-brand-100">№ {offer.number}</div>
              <div className="mt-2 print:hidden">{getStatusBadge(offer.status)}</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Options (Comparison) */}
          {offer.options && offer.options.length > 0 && (
            <div className="mb-4">
              <h3 className="text-base font-bold text-brand-800 mb-2 uppercase">{t.options}</h3>
              <div
                className={
                  `grid grid-cols-1 gap-4 ` +
                  (() => {
                    const n = offer?.options?.length || 0;
                    if (n === 2) return "md:grid-cols-2";
                    if (n === 3) return "md:grid-cols-3";
                    if (n >= 4) return "md:grid-cols-4";
                    return "md:grid-cols-1";
                  })()
                }
              >
                {offer.options.map((opt) => {
                  const totals = calculateInvoiceTotal(opt.services as any);
                  const perWeek = opt.services.filter((s: any) => s.billing === 'weekly').reduce((sum: number, s: any) => sum + s.unitPrice * s.quantity, 0);
                  const perMonth = opt.services.filter((s: any) => s.billing === 'monthly').reduce((sum: number, s: any) => sum + s.unitPrice * s.quantity, 0);
                  const oneTime = opt.services.filter((s: any) => !s.billing || s.billing === 'one_time').reduce((sum: number, s: any) => sum + s.unitPrice * s.quantity, 0);
                  return (
                    <div key={opt.id} className="rounded-lg border border-gray-300 overflow-hidden">
                      <div className="px-3 py-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">{opt.title}</div>
                          {opt.subtitle && <div className="text-xs text-white/80">{opt.subtitle}</div>}
                        </div>
                        {opt.recommended && (
                          <span className="text-[10px] bg-white/20 rounded px-2 py-0.5">
                            {t.recommended}
                          </span>
                        )}
                      </div>
                      <div className="p-3 space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-xs font-semibold text-green-700 mb-1">{lang === 'it' ? 'Incluso' : lang === 'en' ? 'Included' : 'Включено'}</div>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {(opt.includes || []).map((txt, idx) => (
                                <li key={`inc-${idx}`}>{txt}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-red-700 mb-1">{lang === 'it' ? 'Escluso' : lang === 'en' ? 'Excluded' : 'Не включва'}</div>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {(opt.excludes || []).map((txt, idx) => (
                                <li key={`exc-${idx}`}>{txt}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="border rounded p-2">
                          <div className="text-xs font-semibold text-gray-700 mb-1">{lang === 'it' ? 'Cosa prevede il piano' : lang === 'en' ? 'What the plan includes' : 'Какво включва планът'}</div>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {opt.services.map((s, idx) => (
                              <li key={idx}>
                                <span className="font-medium">{s.description}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t pt-2 grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-gray-50 rounded p-2">
                            <div className="text-gray-600">{t.oneTime}</div>
                            <div className="font-semibold">{formatAmount(oneTime)}</div>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <div className="text-gray-600">{t.weekly}</div>
                            <div className="font-semibold">{formatAmount(perWeek)}</div>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <div className="text-gray-600">{t.monthly}</div>
                            <div className="font-semibold">{formatAmount(perMonth)}</div>
                          </div>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-bold text-brand-800">{t.total} (one-time):</span>
                            <span className="font-bold">{formatAmount(oneTime)}</span>
                          </div>
                          {perWeek > 0 && (
                            <div className="flex items-center justify-between text-sm text-gray-700">
                              <span>{t.weekly}:</span>
                              <span>{formatAmount(perWeek)} {t.perWeek}</span>
                            </div>
                          )}
                          {perMonth > 0 && (
                            <div className="flex items-center justify-between text-sm text-gray-700">
                              <span>{t.monthly}:</span>
                              <span>{formatAmount(perMonth)} {t.perMonth}</span>
                            </div>
                          )}
                        </div>
                        {opt.notes && (
                          <div className="text-xs text-gray-600 bg-yellow-50 border border-yellow-200 rounded p-2">
                            {opt.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* Company Info and Offer Meta */}
          <div className="grid grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg print:rounded-none print:gap-2">
            {/* Company */}
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50 print:p-2">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">{t.issuer}</h3>
              <div className="space-y-2 text-sm">
                <div><strong>{t.company}:</strong> {COMPANY_DATA_EN.name}</div>
                <div><strong>{t.address}:</strong> {COMPANY_DATA_EN.address}, {COMPANY_DATA_EN.postalCode} {COMPANY_DATA_EN.city}</div>
                <div><strong>{t.uic}:</strong> {COMPANY_DATA_EN.eik}</div>
                <div><strong>{t.manager}:</strong> {COMPANY_DATA_EN.manager}</div>
                <div><strong>{t.email}:</strong> {COMPANY_DATA_EN.email}</div>
                <div><strong>{t.phone}:</strong> {COMPANY_DATA_EN.phone}</div>
              </div>
            </div>

            {/* Offer Meta */}
            <div className="p-3 print:p-2">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">{t.details}</h3>
              <div className="space-y-2 text-sm">
                <div><strong>{t.title}:</strong> {offer.title}</div>
                <div><strong>{t.date}:</strong> {offer.date}</div>
                <div><strong>{t.validUntil}:</strong> {calculatedData.validUntil} ({offer.validForDays} {t.days})</div>
                <div><strong>{t.place}:</strong> {offer.place}</div>
              </div>
            </div>
          </div>

          

          {/* Info Note (only) */}
          <div className="mb-4">
            <div className="p-3 bg-gradient-to-r from-brand-50 to-blue-50 border border-gray-300 rounded-lg">
              <div className="text-sm space-y-1">
                <p>{t.notInvoice}</p>
                <p><strong>{t.vat}:</strong> {t.vatNoteShort}</p>
                <p>
                  {lang === 'it' ? 'Piccole modifiche: gratis; modifiche grandi: da concordare.' :
                   lang === 'en' ? 'Small changes: free; big changes: negotiable.' :
                   'Малки промени: безплатно; големи промени: по договаряне.'}
                </p>
                {offer.notes && (
                  <p className="text-gray-700">{offer.notes}</p>
                )}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t border-gray-300 pt-3">
            <div className="text-xs text-gray-700">
              <p>{t.footerVat}</p>
            </div>
          </div>
        </div>

        {/* Footer (hidden in print) */}
        <div className="border-t border-gray-300 p-4 bg-gradient-to-r from-gray-50 to-brand-50 rounded-b-xl print:rounded-none print:hidden">
          <div className="text-center text-sm text-gray-600">
            <p>
              <strong>{COMPANY_DATA.name}</strong> | {COMPANY_DATA.address}
            </p>
            <p>
              {COMPANY_DATA.email} | {COMPANY_DATA.phone} | {COMPANY_DATA.website}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


