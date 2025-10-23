import type { Contract, ContractLanguage, ContractParty, ContractTerms } from "@/app/_data/contractTypes";

export interface WebsiteContractorInput {
  id: string;
  number: string;
  startDate?: string;
  endDate?: string;
  status?: Contract["status"];
  language?: Extract<ContractLanguage, "en" | "bg">; // default en for this template
  contractor: Pick<ContractParty, "nameLocal" | "nameEn" | "address" | "phone" | "email" | "manager" | "cnic" | "bankAccount" | "bankName">;
  paymentWisePayoneerOnly?: boolean; // if true, override payment terms
}

const WEBSITE_CONTRACTOR_TERMS_EN: ContractTerms = {
  definitions: [
    `"Deliverables": Final website, web application, and associated source code, excluding pre-existing libraries, frameworks, or third-party components used by the Contractor.`,
    `"Acceptance": Client's written approval of the Deliverables, or expiration of the review period without written objections.`,
    `"Change Request": Any modification to the original Scope of Work requiring additional time, resources, or budget.`,
    `"Confidential Information": Any proprietary business, technical, or financial information disclosed by either party during this Agreement.`
  ],
  clauses: [
    {
      title: "Scope of Work",
      points: [
        "Design and development of modern, responsive websites and web applications.",
        "Content integration, contact forms, and basic SEO setup.",
        "Technology stack provided by the Company to the Contractor unless otherwise agreed."
      ]
    },
    {
      title: "Price and Payment",
      points: [
        "Independent contractor; invoice-based payment.",
        "All payments shall be made exclusively via Wise or Payoneer (no direct bank transfer) due to high bank fees.",
        "Payment within 5 business days of invoice, unless otherwise agreed in writing.",
        "Contractor is responsible for transaction fees charged by Wise/Payoneer.",
        "Late payments: Statutory interest applies after 5 business days from due date."
      ]
    },
    {
      title: "Delivery and Acceptance",
      points: [
        "Missing tools necessary to complete the task must be provided by the Company.",
        "Client has 5 business days to submit written comments; lack thereof constitutes Acceptance."
      ]
    },
    {
      title: "Intellectual Property and Ownership",
      points: [
        "Full IP rights to the final Deliverables transfer to the Company upon full payment.",
        "Pre-existing tools/libraries of the Contractor are not transferred.",
        "Contractor may showcase projects in portfolio without confidential data."
      ]
    },
    {
      title: "Change Requests",
      points: [
        "Out-of-scope changes require prior written approval (change order).",
        "Such changes may impact both schedule and budget."
      ]
    },
    {
      title: "Warranty and Support",
      points: [
        "Support or evolutive work may be arranged under separate service agreements (SLA) if needed."
      ]
    },
    {
      title: "Confidentiality",
      points: [
        "Both parties shall keep Confidential Information strictly confidential.",
        "This obligation survives termination of the Agreement."
      ]
    },
    {
      title: "Termination",
      points: [
        "For material breach: 7 days written notice.",
        "Company shall pay for work performed up to the termination date."
      ]
    },
    {
      title: "Limitation of Liability",
      points: [
        "No indirect or consequential damages.",
        "Contractor's liability is limited to fees paid under this Agreement."
      ]
    },
    {
      title: "Independent Contractor Status",
      points: [
        "Contractor acts as an independent professional, not as employee or agent.",
        "Nothing in this Agreement creates employment, partnership, or joint venture.",
        "Each party is responsible for its own taxes and legal obligations."
      ]
    },
    {
      title: "Force Majeure",
      points: [
        "Neither party shall be liable for delay or non-performance due to causes beyond reasonable control (e.g., war, natural disaster, internet outage, government restrictions, pandemic).",
        "The affected party shall notify the other within 5 business days."
      ]
    },
    {
      title: "Dispute Resolution",
      points: [
        "Any dispute must be discussed in writing within 10 business days of notice.",
        "If unresolved, parties may attempt mediation before court proceedings.",
        "Parties shall attempt good-faith resolution before litigation."
      ]
    },
    {
      title: "Communication & Notices",
      points: [
        "Termination notices must be sent via email to the specified addresses.",
        "Change Requests communicated via platforms chosen by the Company.",
        "Notices are considered received upon delivery confirmation."
      ]
    },
    {
      title: "Entire Agreement",
      points: [
        "This Agreement constitutes the entire understanding between the Parties and supersedes all prior discussions or agreements.",
        "Any amendments must be in writing and signed by both parties."
      ]
    },
    {
      title: "Governing Law and Jurisdiction",
      points: [
        "This Agreement is governed by Bulgarian law.",
        "Exclusive jurisdiction: Sofia, Bulgaria."
      ]
    }
  ]
};

export function createWebsiteContractorContractEn(input: WebsiteContractorInput): Contract {
  const language: ContractLanguage = input.language ?? "en";
  const terms: ContractTerms = WEBSITE_CONTRACTOR_TERMS_EN;
  return {
    id: input.id,
    number: input.number,
    type: "website",
    language,
    title: "Website Development Agreement",
    status: input.status ?? "active",
    startDate: input.startDate ?? "today",
    endDate: input.endDate,
    client: {
      nameLocal: input.contractor.nameLocal,
      nameEn: input.contractor.nameEn,
      address: input.contractor.address,
      phone: input.contractor.phone,
      email: input.contractor.email,
      manager: input.contractor.manager ?? input.contractor.nameLocal,
      cnic: input.contractor.cnic,
      bankAccount: input.contractor.bankAccount,
      bankName: input.contractor.bankName
    },
    terms
  };
}


