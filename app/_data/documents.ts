// Generic Documents Data Module
// Purpose: Issue generic statements (e.g., payment statement to individual, TRC provided statement)

import { COMPANY_DATA, COMPANY_DATA_EN } from "@/app/_data/contracts";

export type DocumentLanguage = 'bg' | 'en';
export type DocumentType = 'payment_statement' | 'trc_statement' | 'generic_statement' | 'loan_agreement';
export type DocumentStatus = 'draft' | 'pending' | 'ready' | 'cancelled';

export interface DocumentParty {
  name: string;
  country?: string;
  identifier?: string; // EGN/ID/Tax ID
  address?: string;
  email?: string;
  bankAccount?: string;
  bankName?: string;
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
  // Case 1 – Не е осигурена другаде (вие плащате всички осигуровки и данъци)
  {
    id: "doc-payment-statement-2025-001",
    number: "PS-2025-001",
    type: "payment_statement",
    language: "bg",
    title: "Известие за изплатено възнаграждение по граждански договор",
    date: "10.11.2025",
    status: "ready",
    subject: "Плащане към физическо лице по граждански договор",
    party: {
      name: "Виктория Младенова",
      country: "BG",
      identifier: "EGN: 0552186774",
      address: "ул. Янко Забунов 23, гр. Костинброд",
      email: "viktoriamladenova30soy@gmail.com",
      bankAccount: "BG31STSA93000030316979",
      bankName: "Банка ДСК АД"
    },
    fields: [
      { label: "Брутна сума", value: "259.37 лв." },
      { label: "Нормативно признати разходи (25%)", value: "64.84 лв." },
      { label: "Облагаема база (75%)", value: "194.53 лв." },
      { label: "ДОО+ЗО (22.8%)", value: "44.35 лв." },
      { label: "Удържан данък (10%)", value: "15.02 лв." },
      { label: "Нетно изплатена сума", value: "200.00 лв." },
      { label: "Правно основание", value: "ЗДДФЛ, чл. 42; осигуровки чл. 4 и чл. 40 КСО" },
      { label: "Период за декларация", value: "2025-Q4 (Д55, Д1)" },
      { label: "Референция договор", value: "CTR-2025-WS-003" },
    ],
    body: [
      "Настоящият документ удостоверява плащане към физическо лице по граждански договор.",
      "Платецът удържа и внася дължимите осигуровки и данък по ЗДДФЛ към НАП в законоустановения срок.",
      "Общо начислено: 259.37 лв.; изплатено на лицето: 200.00 лв.; преведено към НАП: 59.37 лв."
    ],
    attachments: [
      "Договор CTR-2025-WS-003",
    ],
    notes: "Окончателно при плащане",
  },
  {
    id: "doc-loan-agreement-2025-001",
    number: "LA-2025-001",
    type: "loan_agreement",
    language: "bg",
    title: "Договор за заем към дружеството",
    date: "31.10.2025",
    status: "ready",
    subject: "Заем от управителя към дружеството (внасяне на средства)",
    party: {
      name: "Денис Руменов Бързанов",
      country: "BG",
      identifier: "ЕГН: 0248226921",
      address: "гр. Костинброд, ул. Александър Стамболийски, 2",
      email: "denis.barzanov2002@gmail.com"
    },
    fields: [
      { label: "Заемодател", value: "Денис Руменов Бързанов" },
      { label: "Заемополучател", value: "ОмниСкриптс ЕООД (ЕИК 208165760)" },
      { label: "Сума на заема", value: "500 лв." },
      { label: "Валута", value: "BGN" },
      { label: "Дата на предоставяне", value: "01.11.2025" },
      { label: "Лихва", value: "0% (безлихвен заем)" },
      { label: "Срок на погасяване", value: "02.11.2025" },
      { label: "Банкова сметка на дружеството", value: "IBAN: BG51 BPBI 7940 1094 8630 01 (Postbank)" },
      { label: "Банкова сметка на заемодателя", value: "IBAN: BG15BPBI79421024659801" }
    ],
    body: [
      "1) Страни: Настоящият договор се сключва между Заемодател – Денис Руменов Бързанов, и Заемополучател – ОмниСкриптс ЕООД (ЕИК 208165760).",
      "2) Предмет: Заемодателят предоставя на Заемополучателя парична сума за оперативни нужди на дружеството.",
      "3) Предоставяне на сумата: Сумата се предоставя по банков път към посочената фирмена сметка или в брой срещу разписка. Дружеството потвърждава получаването на средствата.",
      "4) Лихва: Заемът е безлихвен (0%), освен ако страните не уговорят друго писмено.",
      "5) Срок и погасяване: Заемът се погасява до посочения срок. Допуска се предсрочно частично или пълно погасяване без неустойки.",
      "6) Отчетност: Дружеството води отчетност за получените и погасени суми. При поискване предоставя справка на Заемодателя.",
      "7) Приложимо право: Българско право. Компетентен съд – София.",
      "8) Настоящият договор удостоверява, че средствата са внесени в дружеството (money going in) от Заемодателя."
    ],
    attachments: [
      "Платежно нареждане/разписка за внесената сума"
    ],
    notes: "Готов за печат. Попълнете сумата/дата/срок преди подпис."
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


