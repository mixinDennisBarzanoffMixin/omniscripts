"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";

export default function AhmadAreebContractPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Website Development Agreement | OmniScripts";
  }, []);

  const handlePrint = () => window.print();

  // Contractor — OmniScripts (standalone data, no shared imports)
  const COMPANY = {
    name: "OmniScripts LTD",
    nameLocal: "ОмниСкриптс ЕООД",
    address: "Aleksandar Stamboliyski St. 2, 2230 Kostinbrod, Bulgaria",
    eik: "208165760",
    vat: "",
    manager: "Dennis Rumenoff Barzanoff",
    email: "service@omniscripts.eu",
    phone: "+359 88 360 0203",
    website: "www.omniscripts.eu",
    bank: {
      name: "Postbank",
      iban: "BG51 BPBI 7940 1094 8630 01",
      bic: "BPBIBGSF",
      address: "OKOLOVRASTEN PAT STR 260, SOFIA",
    },
  } as const;

  // Client — Individual: Ahmad Areeb
  const CLIENT = {
    name: "Ahmad Areeb",
    cnic: "3120293756975",
    address: "DHA, Lahore, Punjab, Pakistan",
    email: "areebsps@gmail.com",
    phone: "+923053246391",
    bankName: "Standard Chartered Bank",
    iban: "PK43SCBL0000001012849901",
    bic: "SCBLPKKX"
  } as const;

  const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };

  const contractNumber = `CTR-2025-WS-001`;
  const today = new Date("2025-10-11");
  const estimatedCompletion = new Date("2025-11-10");
  estimatedCompletion.setDate(estimatedCompletion.getDate() + 30);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Controls (hidden in print) */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600"
          >
            <Printer className="mr-2 h-4 w-4" /> Print
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
                <h1 className="text-xl font-bold">Website Development Agreement</h1>
                <p className="text-brand-100 text-sm">Between OmniScripts LTD and Ahmad Areeb</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold leading-none">AGREEMENT</div>
              <div className="text-brand-100">No. {contractNumber} | Date: {formatDate(today)}</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Parties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg print:rounded-none">
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">Company</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {COMPANY.name} ({COMPANY.nameLocal})</div>
                <div><strong>Address:</strong> {COMPANY.address}</div>
                <div><strong>UIC (EIK):</strong> {COMPANY.eik}</div>
                <div><strong>Representative:</strong> {COMPANY.manager}</div>
                <div><strong>Email:</strong> {COMPANY.email}</div>
                <div><strong>Phone:</strong> {COMPANY.phone}</div>
                <div><strong>IBAN:</strong> {COMPANY.bank.iban}</div>
                <div><strong>BIC:</strong> {COMPANY.bank.bic}</div>
                <div><strong>Bank:</strong> {COMPANY.bank.name}</div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">Contractor</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {CLIENT.name}</div>
                <div><strong>CNIC (ID):</strong> {CLIENT.cnic}</div>
                <div><strong>Address:</strong> {CLIENT.address}</div>
                <div><strong>Email:</strong> {CLIENT.email}</div>
                <div><strong>Phone:</strong> {CLIENT.phone}</div>
                <div><strong>IBAN:</strong> {CLIENT.iban}</div>
                <div><strong>BIC:</strong> {CLIENT.bic}</div>
                <div><strong>Bank:</strong> {CLIENT.bankName}</div>
              </div>
              <div className="mt-3 p-2 bg-gray-50 rounded border text-sm grid grid-cols-2 gap-2">
                <div><strong>Start:</strong> {formatDate(today)}</div>
                <div><strong>Estimated End:</strong> {formatDate(estimatedCompletion)}</div>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <section className="mb-4">
            <div className="rounded-lg border border-gray-300 p-4 bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-base font-bold text-brand-800 mb-2">Definitions</h3>
              <div className="text-[13px] leading-6 space-y-2">
                <p><strong>"Deliverables"</strong> means the final website, web application, and associated source code, excluding any pre-existing libraries, frameworks, or third-party components used by the Contractor.</p>
                <p><strong>"Acceptance"</strong> means the Client's written approval of the Deliverables, or the expiration of the review period without written objections.</p>
                <p><strong>"Change Request"</strong> means any modification to the originally agreed Scope of Work that requires additional time, resources, or budget.</p>
                <p><strong>"Confidential Information"</strong> means any proprietary business, technical, or financial information disclosed by either party during the term of this Agreement.</p>
              </div>
            </div>
          </section>

          {/* Terms */}
          <section className="mb-4">
            <div className="rounded-lg border border-gray-300 p-4 bg-white">
              <h3 className="text-base font-bold text-brand-800 mb-3">Key Clauses</h3>
              <div className="grid md:grid-cols-2 gap-4 text-[13px] leading-6">
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">1) Scope of Work</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Design and development of modern, responsive websites and web applications.</li>
                    <li>Content integration, contact forms, basic SEO setup.</li>
                    <li>Technology stack provided by the Company to the Contractor unless otherwise agreed upon.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">2) Price and Payment</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payment after each task completion.</li>
                    <li>Tasks are priced as per their respective complexity and scope.</li>
                    <li>The Contractor retains the right to refrain from accepting a task if they deem it not feasible for the agreed upon sum.</li>
                    <li><strong>Currency:</strong> All payments shall be made in EUR (€) via bank transfer to the Contractor's account within 5 business days of invoice issuance.</li>
                    <li><strong>Bank fees:</strong> Any bank transfer fees are borne by the Client.</li>
                    <li>Late payments: statutory interest after 5 business days from due date.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">3) Delivery and Acceptance</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Any missing tools necessary for the Contractor to complete the task must be provided to the Contractor by the Company.</li>
                    <li>Client has 5 business days to submit written comments.</li>
                    <li>Absence of comments within the review window constitutes Acceptance.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">4) Intellectual Property and Ownership</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Full IP rights to the final Deliverable transfer to Company upon full payment.</li>
                    <li>Pre-existing tools/libraries of the Contractor are not transferred.</li>
                    <li>The Contractor may and is free to showcase the projects in portfolio without confidential data.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">5) Change Requests</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Out-of-scope changes require prior written approval (change order).</li>
                    <li>Changes may impact schedule and budget.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">6) Warranty and Support</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Support/evolutive work under a separate agreement (SLA) if needed.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">7) Confidentiality</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Both parties shall keep Confidential Information strictly confidential.</li>
                    <li>This obligation survives termination of this Agreement.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">8) Termination</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>For material breach: 7 days written notice.</li>
                    <li>Company shall pay for work performed up to the termination date.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">9) Limitation of Liability</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>No indirect or consequential damages.</li>
                    <li>Contractor liability capped at fees paid under this Agreement.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">10) Independent Contractor Status</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Contractor acts as an independent professional, not as an employee or agent of the Company.</li>
                    <li>Nothing in this Agreement creates employment, partnership, or joint venture.</li>
                    <li>Each party is responsible for its own taxes and legal obligations.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">11) Force Majeure</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Neither party shall be liable for delay or non-performance due to causes beyond reasonable control (e.g., war, natural disaster, internet outage, government restrictions, pandemic).</li>
                    <li>The affected party shall notify the other within 5 business days.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">12) Dispute Resolution</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Any dispute shall first be discussed in writing within 10 business days of notice.</li>
                    <li>If not resolved, parties may attempt mediation prior to court proceedings.</li>
                    <li>Parties shall attempt good-faith resolution before litigation.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">13) Communication & Notices</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Termination shall be sent via email to the addresses listed above.</li>
                    <li>Change Requests shall be communicated via platforms decided by the company.</li>
                    <li>Notices are considered received upon confirmation of delivery.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">14) Entire Agreement</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>This Agreement constitutes the entire understanding between the Parties.</li>
                    <li>It supersedes all prior discussions, representations, or agreements, whether oral or written.</li>
                    <li>Any amendments must be made in writing and signed by both parties.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">15) Governing Law and Jurisdiction</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bulgarian law governs. Competent courts: Sofia, Bulgaria.</li>
                    <li>Both parties consent to the exclusive jurisdiction of Bulgarian courts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Signatures */}
          <section className="border-t-2 border-brand-300 pt-4 mt-6">
            <h3 className="text-base font-bold text-brand-800 mb-4 text-center">Signatures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-300 rounded-lg p-4 bg-gradient-to-br from-gray-50 to-white">
                <h4 className="text-sm font-bold text-brand-800 mb-3 uppercase">Client</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Printed Name:</p>
                    <p className="text-sm font-semibold">{CLIENT.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">CNIC:</p>
                    <p className="text-sm">{CLIENT.cnic}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-600 mb-1">Signature:</p>
                    <div className="border-b-2 border-gray-400 h-12 flex items-end pb-1">
                      <span className="text-xs text-gray-400 italic"></span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-600 mb-1">Date:</p>
                    <div className="border-b border-gray-400 w-40 h-8" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg p-4 bg-gradient-to-br from-brand-50 to-blue-50">
                <h4 className="text-sm font-bold text-brand-800 mb-3 uppercase">Contractor</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Company:</p>
                    <p className="text-sm font-semibold">{COMPANY.name}</p>
                    <p className="text-xs text-gray-500">({COMPANY.nameLocal})</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">UIC (EIK):</p>
                    <p className="text-sm">{COMPANY.eik}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Represented by:</p>
                    <p className="text-sm font-semibold">{COMPANY.manager}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-600 mb-1">Signature:</p>
                    <div className="border-b-2 border-gray-400 h-12 flex items-end pb-1">
                      <span className="text-xs text-gray-400 italic"></span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-600 mb-1">Date:</p>
                    <div className="border-b border-gray-400 w-40 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 p-4 bg-gradient-to-r from-gray-50 to-brand-50 rounded-b-xl print:rounded-none print:hidden text-center text-sm text-gray-600">
          <p><strong>{COMPANY.website}</strong> | Email: {COMPANY.email}</p>
          <p>IBAN: {COMPANY.bank.iban} | BIC: {COMPANY.bank.bic} | Bank: {COMPANY.bank.name}</p>
        </div>
      </div>
    </div>
  );
}


