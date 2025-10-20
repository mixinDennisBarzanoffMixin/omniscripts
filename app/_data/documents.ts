// Generic Documents Data Module
// Purpose: Issue generic statements (e.g., payment statement to individual, TRC provided statement)

import { COMPANY_DATA, COMPANY_DATA_EN } from "@/app/_data/contracts";

export type DocumentLanguage = 'bg' | 'en';
export type DocumentType = 'payment_statement' | 'trc_statement' | 'generic_statement';
export type DocumentStatus = 'draft' | 'pending' | 'ready' | 'cancelled';

export interface DocumentParty {
  name: string;
  country?: string;
  identifier?: string; // EGN/ID/Tax ID
  address?: string;
  email?: string;
}

export interface DocumentField {
  label: string;
  value: string;
}

export interface GenericDocument {
  id: string;
  number: string;
  type: DocumentType;
  language: DocumentLanguage;
  title: string;
  date: string; // dd.mm.yyyy
  status: DocumentStatus;
  subject?: string;
  party?: DocumentParty; // counterparty (if any)
  fields?: DocumentField[]; // key details rendered as table
  body?: string[]; // paragraphs
  attachments?: string[]; // doc refs
  notes?: string;
}

export const DOCUMENTS: GenericDocument[] = [
  {
    id: "doc-payment-statement-2025-001",
    number: "PS-2025-001",
    type: "payment_statement",
    language: "bg",
    title: "Сметка за изплатени суми / Платежно извлечение",
    date: "20.10.2025",
    status: "draft",
    subject: "Плащане към физическо лице по граждански договор",
    party: {
      name: "Име Фамилия",
      country: "BG",
      identifier: "EGN: —",
      address: "—",
      email: "—",
    },
    fields: [
      { label: "Брутна сума", value: "100.00 лв." },
      { label: "Нормативно признати разходи (25%)", value: "25.00 лв." },
      { label: "Облагаема база (75%)", value: "75.00 лв." },
      { label: "Удържан данък (10% от 75%)", value: "7.50 лв." },
      { label: "Нетно изплатена сума", value: "92.50 лв." },
      { label: "Правно основание", value: "ЗДДФЛ, чл. 42 (10% върху 75%)" },
      { label: "Период за декларация", value: "2025-Q4 (Д55)" },
      { label: "Референция договор", value: "CTR-2025-WS-003" },
    ],
    body: [
      "Настоящият документ удостоверява плащане към физическо лице по граждански договор.",
      "Платецът е удържал дължимия данък по ЗДДФЛ и ще го внесе към НАП в законоустановения срок.",
    ],
    attachments: [
      "Сметка за изплатени суми (подписана)",
      "Служебна бележка (годишна)",
      "Договор CTR-2025-WS-003",
    ],
    notes: "Чернова – окончателно при плащане",
  },
  {
    id: "doc-trc-ack-2025-001",
    number: "TRC-ACK-2025-001",
    type: "trc_statement",
    language: "en",
    title: "Statement of Tax Residency Certificate (TRC) Provided",
    date: "20.10.2025",
    status: "ready",
    subject: "Confirmation that a Tax Residency Certificate was presented",
    party: {
      name: "John Doe",
      country: "PK",
      identifier: "Passport: —",
      address: "—",
      email: "—",
    },
    fields: [
      { label: "TRC Status", value: "Provided" },
      { label: "TRC Document ID", value: "DOC-TRC-2025-001" },
      { label: "Effective Period", value: "01.01.2025 – 31.12.2025" },
      { label: "Legal Basis", value: "Bulgarian Corporate/Personal Tax rules + DTT" },
    ],
    body: [
      "We hereby confirm that the above person provided a valid Tax Residency Certificate.",
      "Withholding tax treatment will be applied in accordance with the Double Tax Treaty and local rules.",
    ],
    attachments: ["TRC PDF copy"],
    notes: "For audit trail only.",
  },
];

export function getDocumentById(id: string): GenericDocument | undefined {
  return DOCUMENTS.find(d => d.id === id);
}

export const DOCUMENT_TRANSLATIONS = {
  bg: {
    back: 'Назад',
    print: 'Печат',
    document: 'ДОКУМЕНТ',
    date: 'Дата',
    company: 'Издател',
    party: 'Получател / Лице',
    fields: 'Данни',
    subject: 'Относно',
    attachments: 'Приложения',
    notes: 'Бележки',
    signature: 'Подпис',
  },
  en: {
    back: 'Back',
    print: 'Print',
    document: 'DOCUMENT',
    date: 'Date',
    company: 'Issuer',
    party: 'Party',
    fields: 'Details',
    subject: 'Subject',
    attachments: 'Attachments',
    notes: 'Notes',
    signature: 'Signature',
  }
};


