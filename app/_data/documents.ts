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

// Loan agreement factory types
export interface LoanAgreementParams {
  id: string;
  number: string;
  date: string; // document date
  amount: string; // e.g. "500 лв."
  providedDate: string; // e.g. "01.11.2025"
  dueDate: string; // e.g. "02.11.2025"
  lender: DocumentParty; // Заемодател (person)
  borrowerName?: string; // display name for borrower; defaults to company name + EIK
  companyBankAccountDisplay?: string; // override display for company bank account
  lenderBankAccountDisplay?: string; // display for lender bank account
  interest?: string; // e.g. "0% (безлихвен заем)"
  title?: string;
  subject?: string;
  language?: DocumentLanguage;
  status?: DocumentStatus;
  attachments?: string[];
  notes?: string;
}

export function createLoanAgreementDocument(params: LoanAgreementParams): GenericDocument {
  const {
    id,
    number,
    date,
    amount,
    providedDate,
    dueDate,
    lender,
    borrowerName = `${COMPANY_DATA.name} (ЕИК ${COMPANY_DATA.eik})`,
    companyBankAccountDisplay = `IBAN: ${COMPANY_DATA.iban} (${COMPANY_DATA.bank})`,
    lenderBankAccountDisplay = lender.bankAccount ? `IBAN: ${lender.bankAccount}` : "—",
    interest = "0% (безлихвен заем)",
    title = "Договор за заем към дружеството",
    subject = "Заем от управителя към дружеството (внасяне на средства)",
    language = "bg",
    status = "ready",
    attachments = ["Платежно нареждане/разписка за внесената сума"],
    notes = "Готов за печат. Попълнете сумата/дата/срок преди подпис."
  } = params;

  const fields: DocumentField[] = [
    { label: "Заемодател", value: lender.name },
    { label: "Заемополучател", value: borrowerName },
    { label: "Сума на заема", value: amount },
    { label: "Валута", value: "BGN" },
    { label: "Дата на предоставяне", value: providedDate },
    { label: "Лихва", value: interest },
    { label: "Срок на погасяване", value: dueDate },
    { label: "Банкова сметка на дружеството", value: companyBankAccountDisplay },
    { label: "Банкова сметка на заемодателя", value: lenderBankAccountDisplay },
  ];

  const body: string[] = [
    `1) Страни: Настоящият договор се сключва между Заемодател – ${lender.name}, и Заемополучател – ${borrowerName}.`,
    "2) Предмет: Заемодателят предоставя на Заемополучателя парична сума за оперативни нужди на дружеството.",
    "3) Предоставяне на сумата: Сумата се предоставя по банков път към посочената фирмена сметка или в брой срещу разписка. Дружеството потвърждава получаването на средствата.",
    "4) Лихва: Заемът е безлихвен (0%), освен ако страните не уговорят друго писмено.",
    "5) Срок и погасяване: Заемът се погасява до посочения срок. Допуска се предсрочно частично или пълно погасяване без неустойки.",
    "6) Отчетност: Дружеството води отчетност за получените и погасени суми. При поискване предоставя справка на Заемодателя.",
    "7) Приложимо право: Българско право. Компетентен съд – София.",
    "8) Настоящият договор удостоверява, че средствата са внесени в дружеството (money going in) от Заемодателя."
  ];

  return {
    id,
    number,
    type: "loan_agreement",
    language,
    title,
    date,
    status,
    subject,
    party: lender,
    fields,
    body,
    attachments,
    notes,
  };
}
/**
 * Generates a contract termination notice document for a civil contract (Граждански договор)
 * with immediate effect from today.
 *
 * @param params Object containing party info and contract number.
 * Fields:
 *   - id: string (unique document id)
 *   - number: string (termination doc number)
 *   - contractNumber: string (original civil contract number)
 *   - party: { name: string, identifier?: string, address?: string, email?: string }
 *   - date?: string (defaults to today's date)
 *   - status?: string
 */
export function createCivilContractTerminationDocument(params: {
  id: string;
  number: string;
  contractNumber: string;
  party: {
    name: string;
    identifier?: string;
    address?: string;
    email?: string;
    country?: string;
    bankAccount?: string;
    bankName?: string;
  };
  date?: string;
  status?: string;
}): GenericDocument {
  const {
    id,
    number,
    contractNumber,
    party,
    date = new Date().toISOString().slice(0, 10),
    status = "ready",
  } = params;

  const title = "Notice of Civil Contract Termination";
  const subject = `Termination of Civil Contract No. ${contractNumber}`;
  const language = "en";
  const attachments = [`Civil Contract No. ${contractNumber}`];
  const notes =
    "This document certifies the termination of a civil contract with immediate effect. Please notify all parties and confirm receipt.";

  const fields: DocumentField[] = [
    { label: "Contract No.", value: contractNumber },
    { label: "Party", value: party.name },
    party.identifier ? { label: "Identifier", value: party.identifier } : { label: "Identifier", value: "—" },
    party.address ? { label: "Address", value: party.address } : { label: "Address", value: "—" },
    party.email ? { label: "Email", value: party.email } : { label: "Email", value: "—" },
    { label: "Date of Termination", value: date },
    { label: "Grounds", value: "Termination by mutual agreement (Art. 325, item 1 of the LC) / unilateral with notice" },
  ];

  const body: string[] = [
    `This notice is to inform ${party.name}${party.identifier ? " (" + party.identifier + ")" : ""} that Civil Contract No. ${contractNumber} is hereby terminated effective as of the date of this notice.`,
    "All relations arising from the contract are considered terminated as of today.",
    "The parties settle any outstanding obligations as of the date of termination.",
    "This notice is issued in accordance with legal requirements for the termination of a civil contract.",
  ];

  return {
    id,
    number,
    type: "generic_statement",
    language,
    title,
    date,
    status: "ready" as DocumentStatus,
    subject,
    party,
    fields,
    body,
    attachments,
    notes,
  };
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
  // Loan Agreement using factory for easy variants
  createLoanAgreementDocument({
    id: "doc-loan-agreement-2025-001",
    number: "LA-2025-001",
    date: "31.10.2025",
    amount: "500 лв.",
    providedDate: "01.11.2025",
    dueDate: "02.11.2025",
    lender: {
      name: "Денис Руменов Бързанов",
      country: "BG",
      identifier: "ЕГН: 0248226921",
      address: "гр. Костинброд, ул. Александър Стамболийски, 2",
      email: "denis.barzanov2002@gmail.com",
      bankAccount: "BG15BPBI79421024659801",
    },
  }),  
  createLoanAgreementDocument({
    id: "doc-loan-agreement-2025-002",
    number: "LA-2025-002",
    date: "12.11.2025",
    amount: "1000 лв.",
    providedDate: "12.11.2025",
    dueDate: "15.11.2025",
    lender: {
      name: "Денис Руменов Бързанов",
      country: "BG",
      identifier: "ЕГН: 0248226921",
      address: "гр. Костинброд, ул. Александър Стамболийски, 2",
      email: "denis.barzanov2002@gmail.com",
      bankAccount: "BG15BPBI79421024659801",
      bankName: "Юробанк България АД, 942"
    },
  }),
  createLoanAgreementDocument({
    id: "doc-loan-agreement-2025-003",
    number: "LA-2025-003",
    date: "12.11.2025",
    amount: "400 лв.",
    providedDate: "01.12.2025",
    dueDate: "02.12.2025",
    lender: {
      name: "Денис Руменов Бързанов",
      country: "BG",
      identifier: "ЕГН: 0248226921",
      address: "гр. Костинброд, ул. Александър Стамболийски, 2",
      email: "denis.barzanov2002@gmail.com",
      bankAccount: "BG15BPBI79421024659801",
      bankName: "Юробанк България АД, 942"
    },
  }),
  createLoanAgreementDocument({
    id: "doc-loan-agreement-2025-004",
    number: "LA-2025-004",
    date: "10.12.2025",
    amount: "300 лв.",
    providedDate: "10.12.2025",
    dueDate: "12.12.2025",
    lender: {
      name: "Денис Руменов Бързанов",
      country: "BG",
      identifier: "ЕГН: 0248226921",
      address: "гр. Костинброд, ул. Александър Стамболийски, 2",
      email: "denis.barzanov2002@gmail.com",
      bankAccount: "BG15BPBI79421024659801",
      bankName: "Юробанк България АД, 942"
    },
  }),
  createCivilContractTerminationDocument({
    id: "doc-civil-contract-termination-2025-001",
    number: "CT-2025-001",
    contractNumber: "CTR-2025-WS-004",
    party: {
      name: "Saad Ali Abbasi / Saad Ali Abbasi",
      address: "I-10/4 street 26 house 1113 Islamabad, Pakistan",
      identifier: "CNIC: 3740423977455",
      email: "saadaliabbasi2347@gmail.com",
      country: "PK",
      bankAccount: "PK95MEZN0003020110099471",
      bankName: "Meezan Bank",
    },
    date: "10.12.2025",
  }),
  createCivilContractTerminationDocument({
    id: "doc-civil-contract-termination-2025-002",
    number: "CT-2025-002",
    contractNumber: "CTR-2025-WS-005",
    party: {
      name: "Kiran Ahmad / Kiran Ahmad",
      address: "Happy valley Kohat Kpk near children park",
      identifier: "CNIC: 14301-1199011-4",
      email: "kiran.ahmad.usman@gmail.com",
      country: "PK",
      bankAccount: "PK29MEZN0000300109403559",
      bankName: "Meezan Bank - Meezan Digital Center"
    },
    date: "10.12.2025",
  }),
  createCivilContractTerminationDocument({
    id: "doc-civil-contract-termination-2025-003",
    number: "CT-2025-003",
    contractNumber: "CTR-2025-WS-006",
    party: {
      name: "Syed Ali Asghar / Syed Ali Asghar",
      address: "Umer Academy Street, Defence Road, Sialkot, Pakistan",
      identifier: "CNIC: 34603-5563963-1",
      email: "aligee512@gmail.com",
      country: "PK",
      bankAccount: "PK05NAYA1234503328622123",
      bankName: "NAYAPAY"
    },
    date: "10.12.2025",
  }),
  createCivilContractTerminationDocument({
    id: "doc-civil-contract-termination-2025-004",
    number: "CT-2025-004",
    contractNumber: "CTR-2025-WS-007",
    party: {
      name: "Muhammad Ashir / Muhammad Ashir",
      address: "Rabia city block d1 flat no 41 3rd floor, gulistan e johar, karachi",
      identifier: "CNIC: 42201-3980178-1",
      email: "shaikhashir871@gmail.com",
      country: "PK",
      bankAccount: "PK80ASCM0003710350003094",
      bankName: "Askari bank , Muhammad Ashir"
    },
    date: "10.12.2025",
  }),
  createCivilContractTerminationDocument({
    id: "doc-civil-contract-termination-2025-005",
    number: "CT-2025-005",
    contractNumber: "CTR-2025-WS-008",
    party: {
      name: "Muhammed Umar / Muhammed Umar",
      address: "SHOE MARKET GHOSIA PLAZA G W R 24 FLAT NUMBER GARDEN WEST KARACHI WEST",
      identifier: "CNIC: 42301-2029631-5",
      email: "umartkd989@gmail.com",
      country: "PK",
      bankAccount: "PK52UNIL0109000312764519",
      bankName: "United Bank Limited (UBL)"
    },
    date: "10.12.2025",
  }),
  createCivilContractTerminationDocument({
    id: "doc-civil-contract-termination-2025-006",
    number: "CTR-2025-WS-009",
    contractNumber: "CTR-2025-WS-009",
    party: {
      name: "Kafayat Ullah / Kafayat Ullah",
      address: "I-14, Bhata Chowk, Islamabad.",
      identifier: "CNIC: 14302-2340898-1",
      email: "kafayatullah000@gmail.com",
      country: "PK",
      bankAccount: "",
      bankName: ""
    },
    date: "10.12.2025",
  }),
  createCivilContractTerminationDocument({
    id: "doc-website-dev-agreement-2025-amsil",
    number: "CTR-2025-WS-011",
    contractNumber: "CTR-2025-WS-011",
    party: {
      name: "Amsil Sarim / Amsil Sarim",
      address: "627, block F2, Wapda Town, Lahore",
      identifier: "CNIC: 36502-1538650-9",
      email: "amsil.engr@gmail.com",
      country: "PK",
      bankAccount: "PK17MEZN0002060101106695",
      bankName: "Meezan Bank, AMSIL SARIM, Swift: MEZNPKKALH2"
    },
    date: "10.12.2025"
  }),

  createCivilContractTerminationDocument({
    id: "doc-website-dev-agreement-2025-usama",
    number: "CTR-2025-WS-012",
    contractNumber: "CTR-2025-WS-012",
    party: {
      name: "Usama Islam / Usama Islam",
      address: "St#2 Abubakar town khudian khas, Kasur Punjab, Pakistan",
      identifier: "CNIC: 35102-4111265-9",
      email: "usamak.eng@gmail.com",
      country: "PK",
      bankAccount: "PK64BAHL0022098101094501",
      bankName: "Bank Al Habib, Usama Islam, Swift: BAHLPKKALHR"
    },
    date: "10.12.2025"
  }),

  // createCivilContractTerminationDocument({
  //   id: "doc-civil-contract-termination-2025-002",
  //   number: "CT-2025-002",
  //   contractNumber: "CTR-2025-WS-004",
  //   party: {
  //     name: "Виктория Младенова",
  //     identifier: "EGN: 0552186774",
  //   },
  // }),
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
  { 
    id: "doc-partnership-offer-innowise-2025-001",
    number: "PARTNER-2025-001",
    type: "generic_statement",
    language: "en",
    title: "Partnership Offer to Innowise",
    date: "12.11.2025",
    status: "ready",
    subject: "Proposal for Strategic Partnership",
    party: {
      name: "Innowise USA",
      country: "US",
      identifier: "—",
      address: "7901 4th St N STE 300, St. Petersburg, FL 33702, USA",
      email: "contact@innowise.com",
    },
    fields: [
      { label: "Partnership Type", value: "Delivery & Project Origination" },
      { label: "Issuer", value: "Our Company" },
      { label: "Offer Date", value: "12.11.2025" }
    ],
    body: [
      "We are pleased to extend a formal partnership offer to Innowise USA.",
      "Under this partnership, Innowise USA would leverage its business network to generate and refer new project opportunities, while we would focus on exemplary execution—delivering project outcomes with the highest standards of quality and reliability.",
      "This collaboration aims to mutually strengthen our market presence, combining Innowise's business development strengths with our proven project delivery capabilities.",
      "We envision a long-term, transparent relationship that delivers shared value to both parties as well as to end clients.",
    ],
    attachments: [],
    notes: "For discussion and negotiation purposes only.",
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


