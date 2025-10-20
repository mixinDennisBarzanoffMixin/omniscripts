"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import { GenericDocument, getDocumentById, DOCUMENT_TRANSLATIONS } from "@/app/_data/documents";
import { COMPANY_DATA, COMPANY_DATA_EN } from "@/app/_data/contracts";

export default function DocumentViewPage() {
  const router = useRouter();
  const params = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [doc, setDoc] = useState<GenericDocument | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/status');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          const d = getDocumentById(params.id as string);
          if (d) {
            setDoc(d);
            document.title = `${d.title} | OmniScripts`;
          } else {
            router.push('/documents');
          }
        } else {
          router.push('/login');
        }
      } catch (_) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router, params.id]);

  const handlePrint = () => window.print();

  if (!isAuthenticated || !doc) return <div className="p-6">Loading...</div>;

  const t = DOCUMENT_TRANSLATIONS[doc.language];
  const companyData = doc.language === 'bg' ? COMPANY_DATA : COMPANY_DATA_EN;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Controls */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => router.push('/documents')} className="hover:scale-105 transition-all duration-300">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t.back}
          </Button>
          <Button onClick={handlePrint} className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600">
            <Printer className="mr-2 h-4 w-4" /> {t.print}
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-4xl print:mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-t-xl print:rounded-none text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold">{doc.title}</h1>
              {doc.subject && <p className="text-brand-100 text-sm">{t.subject}: {doc.subject}</p>}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold leading-none">{t.document}</div>
              <div className="text-brand-100">№ {doc.number} | {t.date}: {doc.date}</div>
              <div className="mt-1">
                {renderStatus(doc.status)}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg">
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">{t.company}</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Име / Name:</strong> {companyData.name} {doc.language === 'bg' && `/ ${companyData.nameEn}`}</div>
                <div><strong>Адрес / Address:</strong> {companyData.address}, {companyData.postalCode} {companyData.city}</div>
                <div><strong>ЕИК / UIC:</strong> {companyData.eik} {doc.language === 'bg' && `| VAT: ${companyData.vatNumber}`}</div>
                <div><strong>Предст./Rep.:</strong> {companyData.manager}</div>
                <div><strong>Email:</strong> {companyData.email} | <strong>Tel:</strong> {companyData.phone}</div>
              </div>
            </div>
            {/* Party */}
            <div className="p-3">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">{t.party}</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {doc.party?.name || '—'}</div>
                <div><strong>Country:</strong> {doc.party?.country || '—'}</div>
                <div><strong>ID:</strong> {doc.party?.identifier || '—'}</div>
                <div><strong>Address:</strong> {doc.party?.address || '—'}</div>
                <div><strong>Email:</strong> {doc.party?.email || '—'}</div>
              </div>
            </div>
          </div>

          {/* Fields table */}
          {doc.fields && doc.fields.length > 0 && (
            <section className="mb-4">
              <div className="rounded-lg border border-gray-300 p-4 bg-white">
                <h3 className="text-base font-bold text-brand-800 mb-3">{t.fields}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {doc.fields.map((f, i) => (
                    <div key={i} className="flex justify-between gap-3 text-sm">
                      <span className="text-gray-600">{f.label}</span>
                      <span className="font-medium">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Body paragraphs */}
          {doc.body && doc.body.length > 0 && (
            <section className="mb-4">
              <div className="rounded-lg border border-gray-300 p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="space-y-2 text-[13px]">
                  {doc.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Attachments */}
          {doc.attachments && doc.attachments.length > 0 && (
            <section className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="text-sm font-bold text-brand-800 mb-2">{t.attachments}</h4>
              <ul className="list-disc pl-5 text-sm">
                {doc.attachments.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Notes */}
          {doc.notes && (
            <section className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="text-sm font-bold text-yellow-800 mb-2">{t.notes}</h4>
              <p className="text-sm text-yellow-900">{doc.notes}</p>
            </section>
          )}

          {/* Signatures */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-300 pt-4">
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">{t.company}</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">Име / Name:</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{companyData.name}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">{t.signature}:</p>
                  <div className="border-b border-gray-400 w-64 h-6" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">{t.party}</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">Name:</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{doc.party?.name || '—'}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">{t.signature}:</p>
                  <div className="border-b border-gray-400 w-64 h-6" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function renderStatus(status: 'draft'|'pending'|'ready'|'cancelled') {
  const map = {
    draft: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    ready: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  } as const;
  const cls = map[status] || 'bg-secondary';
  return <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{status}</span>;
}


