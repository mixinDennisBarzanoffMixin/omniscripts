"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import { COMPANY_DATA, COMPANY_DATA_EN, getContractById, CONTRACT_TRANSLATIONS } from "@/app/_data/contracts";
import { Contract } from "@/app/_data/contractTypes";

export default function ContractPage() {
  const router = useRouter();
  const params = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/status");
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          // Load contract data
          const contractData = getContractById(params.id as string);
          if (contractData) {
            setContract(contractData);
            document.title = `${contractData.number} | OmniScripts`;
          } else {
            // Contract not found, redirect to contracts list
            router.push("/contracts");
          }
        } else {
          router.push("/login");
        }
      } catch (_) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router, params.id]);

  const handlePrint = () => window.print();

  if (!isAuthenticated || !contract) {
    return <div className="p-6">Loading...</div>;
  }

  // Get translations and company data based on contract language
  const t = CONTRACT_TRANSLATIONS[contract.language];
  const companyData = contract.language === 'bg' ? COMPANY_DATA : COMPANY_DATA_EN;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Controls (hidden in print) */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => router.push("/contracts")}
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> {t.back}
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600"
          >
            <Printer className="mr-2 h-4 w-4" /> {t.print}
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-4xl print:mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-t-xl print:rounded-none text-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/80 border border-white/30 flex items-center justify-center">
                <img src="/logo.png" alt="OmniScripts" width={40} height={40} />
              </div>
              <div>
                <h1 className="text-xl font-bold">{contract.title}</h1>
                {contract.titleLocal && (
                  <p className="text-brand-100 text-sm">{contract.titleLocal}</p>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold leading-none">
                {t.contract}
              </div>
              <div className="text-brand-100">
                № {contract.number} | {t.date}: {contract.startDate}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Parties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg print:rounded-none">
            {/* Company (Executor/Service Provider) */}
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                {t.company}
              </h3>
              <div className="space-y-2 text-sm">
                <div><strong>{t.name}:</strong> {companyData.name} {contract.language === 'bg' && `/ ${companyData.nameEn}`}</div>
                <div><strong>{t.address}:</strong> {companyData.address}, {companyData.postalCode} {companyData.city}</div>
                <div><strong>{t.uic}:</strong> {companyData.eik} {contract.language === 'bg' && `| ${t.vat}: ${companyData.vatNumber}`}</div>
                <div><strong>{t.representedBy}:</strong> {companyData.manager} {contract.language === 'bg' && `(${companyData.managerTitle})`}</div>
                <div><strong>Email:</strong> {companyData.email}</div>
                <div><strong>{t.phone}:</strong> {companyData.phone}</div>
              </div>
            </div>

            {/* Client/Contractor */}
            <div className="p-3">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                {contract.type === 'marketing' ? t.contractor : t.client}
              </h3>
              <div className="space-y-2 text-sm">
                <div><strong>{t.firmName}:</strong> {contract.client.nameLocal} {contract.client.nameEn && `/ ${contract.client.nameEn}`}</div>
                {contract.client.legalForm && (
                  <div><strong>{t.legalForm}:</strong> {contract.client.legalForm}</div>
                )}
                <div><strong>{t.address}:</strong> {contract.client.address}</div>
                {contract.client.eik && (
                  <div><strong>{t.uic}:</strong> {contract.client.eik} {contract.client.vatNumber && `| ${t.vat}: ${contract.client.vatNumber}`}</div>
                )}
                {contract.client.cnic && (
                  <div><strong>CNIC:</strong> {contract.client.cnic}</div>
                )}
                <div><strong>{t.representative}:</strong> {contract.client.manager}</div>
                <div><strong>Email:</strong> {contract.client.email} | <strong>{t.phone}:</strong> {contract.client.phone}</div>
                {contract.client.bankAccount && (
                  <div><strong>Bank Account:</strong> {contract.client.bankAccount} ({contract.client.bankName})</div>
                )}
              </div>
              <div className="mt-3 p-2 bg-gray-50 rounded border text-sm grid grid-cols-2 gap-2">
                <div><strong>{t.start}:</strong> {contract.startDate}</div>
                <div><strong>{t.end}:</strong> {contract.endDate || '—'}</div>
              </div>
            </div>
          </div>

          {/* Definitions */}
          {contract.terms.definitions && contract.terms.definitions.length > 0 && (
            <section className="mb-4">
              <div className="rounded-lg border border-gray-300 p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                <h3 className="text-base font-bold text-brand-800 mb-3">
                  {contract.language === 'bg' ? 'Определения' : 'Definitions'}
                </h3>
                <div className="space-y-2 text-[13px] leading-relaxed">
                  {contract.terms.definitions.map((definition, idx) => (
                    <p key={idx} className="text-gray-800">
                      {definition}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Terms & Clauses */}
          <section className="mb-4">
            <div className="rounded-lg border border-gray-300 p-4 bg-white">
              <h3 className="text-base font-bold text-brand-800 mb-3">
                {t.terms}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-[13px] leading-6">
                {contract.terms.clauses && contract.terms.clauses.map((clause, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-semibold text-brand-800 mb-1">
                      {idx + 1}) {clause.title}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {clause.points.map((point, pointIdx) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Notes (if any) */}
          {contract.notes && (
            <section className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="text-sm font-bold text-yellow-800 mb-2">📝 Notes</h4>
              <p className="text-sm text-yellow-900">{contract.notes}</p>
            </section>
          )}

          {/* Signatures */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-300 pt-10">
            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">
                {t.company}
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">{t.firmName}:</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{companyData.name}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">{t.representative}:</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{companyData.manager}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">{t.signature}:</p>
                  <div className="border-b border-gray-400 w-64 h-6" />
                </div>
              </div>
            </div>

            {/* Client/Contractor */}
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">
                {contract.type === 'marketing' ? t.contractor : t.client}
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">{t.name}:</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{contract.client.nameLocal}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">{t.representative}:</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{contract.client.manager}</span>
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

        {/* Footer */}
        <div className="border-t border-gray-300 p-4 bg-gradient-to-r from-gray-50 to-brand-50 rounded-b-xl print:rounded-none print:hidden text-center text-sm text-gray-600">
          <p><strong>{companyData.website}</strong> | {companyData.email}</p>
          <p>IBAN: {companyData.iban} | BIC: {companyData.bic} | Bank: {companyData.bank}</p>
        </div>
      </div>
    </div>
  );
}

