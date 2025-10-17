// Contract Types
export type ContractType = 'website' | 'marketing' | 'freelancer' | 'nda';
export type ContractLanguage = 'bg' | 'en';

export interface ContractParty {
  nameLocal: string;
  nameEn?: string;
  address: string;
  eik?: string; // EIK for Bulgarian entities
  vatNumber?: string; // VAT number
  cnic?: string; // CNIC for Pakistani individuals
  phone: string;
  email: string;
  manager: string;
  bankAccount?: string;
  bankName?: string;
  legalForm?: string;
}

export interface ContractTerms {
  definitions: string[];
  clauses: {
    title: string;
    points: string[];
  }[];
}

export interface Contract {
  id: string;
  number: string;
  type: ContractType;
  language: ContractLanguage; // 'bg' for Bulgarian, 'en' for English
  title: string;
  titleLocal?: string;
  status: 'active' | 'pending' | 'draft' | 'expired';
  startDate: string;
  endDate?: string;
  client: ContractParty;
  terms: ContractTerms;
  price?: string;
  advance?: string;
  remainder?: string;
  notes?: string;
}

// Company data (OmniScripts)
export const COMPANY_DATA = {
  name: "ОмниСкриптс ЕООД",
  nameEn: "OmniScripts LTD",
  address: "гр. Костинброд, ул. Александър Стамболийски, 2",
  city: "Костинброд",
  postalCode: "2230",
  eik: "208165760",
  vatNumber: "-",
  manager: "Денис Руменов Бързанов",
  managerTitle: "Управител",
  activity: "62.01 - Компютърно програмиране",
  email: "service@omniscripts.eu",
  phone: "+359 88 360 0203",
  website: "www.omniscripts.eu",
  bank: "Postbank",
  iban: "BG51 BPBI 7940 1094 8630 01",
  bic: "BPBIBGSF",
  bankAddress: "OKOLOVRASTEN PAT STR 260, SOFIA",
  accountant: {
    name: "Денис Руменов Бързанов",
    title: "МОЛ",
    certification: "",
    phone: "+359 88 360 0203"
  },
  cashier: {
    name: "Денис Руменов Бързанов",
    title: "Управител",
    employeeId: "EMP-001"
  }
};

export const COMPANY_DATA_EN = {
  name: "OmniScripts LTD",
  nameEn: "OmniScripts LTD",
  address: "2 Alexander Stamboliyski St., Kostinbrod",
  city: "Kostinbrod",
  postalCode: "2230",
  eik: "208165760",
  vatNumber: "-",
  manager: "Dennis Rumenoff Barzanoff",
  managerTitle: "CEO",
  activity: "62.01 - Computer programming",
  email: "service@omniscripts.eu",
  phone: "+359 88 360 0203",
  website: "www.omniscripts.eu",
  bank: "Postbank",
  iban: "BG51 BPBI 7940 1094 8630 01",
  bic: "BPBIBGSF",
  bankAddress: "OKOLOVRASTEN PAT STR 260, SOFIA",
  accountant: {
    name: "Dennis Rumenoff Barzanoff",
    title: "Legal Representative",
    certification: "",
    phone: "+359 88 360 0203"
  },
  cashier: {
    name: "Dennis Rumenoff Barzanoff",
    title: "CEO",
    employeeId: "EMP-001"
  }

};

// All contracts
export const CONTRACTS: Contract[] = [
  {
    id: "ahmad-areeb",
    number: "CTR-2025-WS-001",
    type: "website",
    language: "en",
    title: "Website Development Agreement",
    status: "active",
    startDate: "11.10.2025",
    endDate: "—",
    client: {
      nameLocal: "Ahmad Areeb",
      nameEn: "Ahmad Areeb",
      address: "Pakistan",
      phone: "—",
      email: "—",
      manager: "Ahmad Areeb",
    },
    terms: {
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
            "Payment after each task completion.",
            "Tasks are priced based on their respective complexity and scope.",
            "Contractor may refuse a task if not feasible for the agreed sum.",
            "Currency: All payments to be made in EUR (€) by bank transfer to Contractor's account within 5 business days of invoice.",
            "Bank transfer fees are borne by the Client.",
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
        ],
    }
  },
  {
    id: "ivan-contract",
    number: "CTR-2025-CL-002", //client
    type: "website",
    language: "bg",
    title: "Договор за изработка на уебсайт",
    titleLocal: "Website Development Agreement",
    status: "pending",
    startDate: "01.10.2025",
    endDate: "01.10.2027",
    client: {
      nameLocal: "КарсБГ-11 ООД",
      nameEn: "CarsBG-11 LTD",
      eik: "204743277",
      vatNumber: "BG204743277",
      legalForm: "Дружество с ограничена отговорност (ООД)",
      address: 'ж.к. Люлин 1, бул. "Сливница" 357А, 1360 София',
      email: "info@carsbg11.com",
      phone: "+359 877 787 971",
      manager: "Елеонора Богданова Хардалиева",
    },
    terms: {
      definitions: [
        `"Резултат": Финален уебсайт, уеб приложение и свързан с него изходен код, с изключение на съществуващи библиотеки, фреймуърци или компоненти на трети страни, използвани от Изпълнителя.`,
        `"Приемане": Писмено одобрение от Възложителя на Резултата или изтичане на периода за преглед без писмени възражения.`,
        `"Искане за промяна": Всяка модификация на първоначалния Обхват на работа, изискваща допълнително време, ресурси или бюджет.`,
        `"Поверителна информация": Всяка собствена бизнес, техническа или финансова информация, разкрита от всяка от страните по време на този Договор.`
      ],
      clauses: [
        {
          title: "Обхват на работата",
          points: [
            "Изработка на уебсайт с модерен responsive дизайн.",
            "Извличане на съдържанието от друг сайт и представяне на неговото съдържание в новия сайт.",
            "Превод на съдържанието на сайта автоматично в български и английски език.",
            "Интеграция на съдържание, форма за контакт, SEO настройка.",
            "Система за аналитика за проследяване на посетителите и посещаваните страници.",
            "Технологии по избор на Изпълнителя."
          ]
        },
        {
          title: "Цена и плащане",
          points: [
            "Обща цена: 3,000 лв.",
            "Плащане след финално приемане.",
            `Плащане с кеш и касова бележка или по банков път към IBAN: ${COMPANY_DATA.iban}, Bank: ${COMPANY_DATA.bank}, BIC: ${COMPANY_DATA.bic}.`,
            "Просрочие: законна лихва след 5 работни дни от падеж."
          ]
        },
        {
          title: "Предаване и приемане",
          points: [
            "Демо среда за преглед от Възложителя.",
            "Възложителят има 30 работни дни за писмени забележки.",
            "При липса на забележки в срока: приемане по право."
          ]
        },
        {
          title: "Права върху резултата",
          points: [
            "Пълните права върху финалния проект се прехвърлят на Възложителя след пълно плащане.",
            "Предварително съществуващи инструменти/библиотеки на Изпълнителя не се прехвърлят.",
            "Изпълнителят може да показва проекта в портфолио, без поверителни данни."
          ]
        },
        {
          title: "Промени",
          points: [
            "Извън-обхватни промени изискват писмено одобрение.",
            "Може да повлияят на срок и бюджет."
          ]
        },
        {
          title: "Гаранция и поддръжка",
          points: [
            "30 дни гаранция за отстраняване на дефекти.",
            "2 години безплатна поддръжка за малки корекции и поправки на уебсайта.",
            "Значителни промени и разширения изискват допълнително заплащане/фактура.",
            "По-нататъшно развитие и мащабни промени по отделно споразумение."
          ]
        },
        {
          title: "Поверителност",
          points: [
            "Строга конфиденциалност на данните на страните.",
            "Задължението за поверителност продължава след прекратяване на Договора."
          ]
        },
        {
          title: "Прекратяване",
          points: [
            "При съществено нарушение – писмено предизвестие 7 дни.",
            "Дължимо заплащане за реално извършена работа до датата на прекратяване."
          ]
        },
        {
          title: "Отговорност",
          points: [
            "Без косвени/последващи вреди.",
            "Отговорност на Изпълнителя е ограничена до платените по договора суми."
          ]
        },
        {
          title: "Приложимо право",
          points: [
            "Българско право. Компетентен съд: София.",
            "Страните полагат усилия за добронамерено уреждане преди съд."
          ]
        },
        {
          title: "Оперативни разходи за уебсайта",
          points: [
            "Текущите разходи за поддържане на уебсайта (хостинг, домейн и др.) се поемат първоначално от Изпълнителя (ОмниСкриптс ЕООД), освен ако не е уговорено друго.",
            "Изпълнителят издава фактури към Възложителя за тези разходи за възстановяване на направените плащания."
          ]
        }
      ]
    }
  },
  {
    id: "aashir-imran",
    number: "CTR-2025-WS-002", // contractor
    type: "marketing",
    language: "en",
    title: "Marketing Manager Agreement",
    titleLocal: "Contract for Marketing Manager",
    status: "pending",
    startDate: "17.10.2025",
    endDate: "—",
    client: {
      nameLocal: "Aashir Imran",
      nameEn: "Aashir Imran",
      cnic: "37405-0201145-3",
      address: "ZB-6101, Street 20 IJP Road Rawalpindi, Pakistan",
      phone: "0332-5015087",
      email: "aashir.imran145@gmail.com",
      manager: "Aashir Imran",
      bankAccount: "PK16ASCM0000550350001882",
      bankName: "Askari Bank"
    },
    terms: {
      definitions: [
        `"Confidential Information": All Company proprietary information including trade secrets, marketing strategies, customer data, business plans, access credentials, API keys, passwords, authentication information, marketing data, analytics, campaign strategies, and performance metrics.`,
        `"Work Product": All marketing materials, content, campaigns, strategies, and deliverables created by the Contractor during the term of this Agreement.`,
        `"Marketing Budget": Predetermined amount allocated by the Company for advertising spend (Google Ads, Facebook Ads, etc.), separate from Contractor fees.`,
        `"Credentials": All access credentials, passwords, API keys, and authentication information provided by the Company to the Contractor.`
      ],
      clauses: [
        {
          title: "Scope of Work",
          points: [
            "Maintain and update company marketing pages and content.",
            "Manage social media presence and digital marketing campaigns.",
            "Create and implement marketing strategies for company products/services.",
            "Monitor and analyze marketing metrics and campaign performance.",
            "Use predetermined Marketing Budget to run advertising campaigns (Google Ads, Facebook Ads, etc.)."
          ]
        },
        {
          title: "Payment Terms",
          points: [
            "Independent contractor relationship; invoice-based payment.",
            "Payment terms to be agreed upon per invoice.",
            "Contractor responsible for all taxes and business expenses.",
            "Marketing Budget is separate from contractor fees and allocated specifically for ad spend.",
            "All payments to Contractor shall be made via bank transfer to the bank account designated by Contractor or through the online payment platform Payoneer (License #C189473, regulated under the Bank of Ireland), as specified in each invoice.",
            "The Company reserves the right to require additional documentation prior to payment to verify payment details or regulatory compliance.",
            "Contractor is responsible for any transaction fees or bank charges incurred during payment."
          ]
        },
        {
          title: "Credential Management & Responsibilities",
          points: [
            "Contractor is solely responsible for safeguarding all Credentials provided by the Company.",
            "Must maintain strict security protocols for all company accounts and platforms.",
            "Immediately report any security breaches, suspicious activity, or credential compromises.",
            "Use company resources and Marketing Budget only for approved business purposes.",
            "Provide regular reports on marketing spend and campaign performance.",
            "Must not share Credentials with any third party without explicit written authorization.",
            "Responsible for any unauthorized use of Credentials or budget under their control."
          ]
        },
        {
          title: "Confidentiality & Non-Disclosure Agreement (NDA)",
          points: [
            "Contractor agrees to maintain strict confidentiality of all Confidential Information.",
            "Non-Disclosure: Contractor shall not disclose, share, or reveal any Confidential Information to third parties during or after the term of this agreement.",
            "All Credentials must be kept strictly confidential and secure.",
            "Contractor must use secure storage and transmission methods for all Confidential Information.",
            "Upon termination, Contractor must return or securely destroy all confidential materials and information.",
            "Breach of confidentiality may result in immediate termination and legal action.",
            "Confidentiality obligations survive termination indefinitely."
          ]
        },
        {
          title: "Independent Contractor Status",
          points: [
            "Contractor acts as independent professional; cannot bind the Company in any legal or financial commitments.",
            "Either party may terminate with 14 days written notice.",
            "All Work Product belongs exclusively to the Company.",
            "Contractor must work independently and may not subcontract without written approval."
          ]
        },
        {
          title: "Intellectual Property",
          points: [
            "All Work Product created belongs exclusively to the Company.",
            "Contractor waives all rights to Work Product created during the contract term.",
            "Company retains full rights to use, modify, and distribute all Work Product."
          ]
        },
        {
          title: "Liability & Indemnification",
          points: [
            "Contractor liable for damages resulting from negligent handling of Credentials or Confidential Information.",
            "Contractor liable for unauthorized use of Marketing Budget or company resources.",
            "Company liability limited to agreed fees; no liability for indirect or consequential damages.",
            "Contractor must indemnify Company against third-party claims arising from Contractor's breach of confidentiality or misuse of resources."
          ]
        },
        {
          title: "Termination",
          points: [
            "Either party may terminate with 14 days written notice.",
            "Immediate termination allowed for breach of confidentiality, credential misuse, or unauthorized budget use.",
            "Upon termination, all Credentials must be revoked immediately.",
            "Final payment due for work completed prior to termination date.",
            "Confidentiality obligations survive termination indefinitely."
          ]
        },
        {
          title: "Governing Law & Jurisdiction",
          points: [
            "Governing law: Bulgaria; jurisdiction: Sofia Courts.",
            "Disputes to be resolved through good-faith negotiation before litigation.",
            "Contractor acknowledges understanding and agreement to all terms herein."
          ]
        }
      ]
    },
    notes: "This contract includes comprehensive NDA clauses and credential responsibility provisions. Marketing budget is separate from contractor compensation."
  }
];

// Helper function to get contract by ID
export function getContractById(id: string): Contract | undefined {
  return CONTRACTS.find(contract => contract.id === id);
}

// Translations for contract UI
export const CONTRACT_TRANSLATIONS = {
  bg: {
    back: 'Назад',
    print: 'Печат',
    contract: 'ДОГОВОР',
    date: 'Дата',
    company: 'Изпълнител',
    client: 'Възложител',
    contractor: 'Изпълнител',
    name: 'Име',
    firmName: 'Фирма',
    address: 'Адрес',
    uic: 'ЕИК',
    vat: 'ДДС №',
    representative: 'Представител',
    representedBy: 'Представлявано от',
    email: 'Email',
    phone: 'Телефон',
    legalForm: 'Правна форма',
    manager: 'Представител',
    start: 'Начало',
    end: 'Край',
    terms: 'Основни клаузи',
    scope: 'Обхват',
    payment: 'Цена и плащане',
    confidentiality: 'Поверителност',
    changes: 'Промени',
    warranty: 'Гаранция и поддръжка',
    status: 'Статус',
    ip: 'Права върху резултата',
    termination: 'Прекратяване',
    liability: 'Отговорност',
    law: 'Приложимо право',
    operational: 'Оперативни разходи за уебсайта',
    responsibilities: 'Отговорности',
    signature: 'Подпис'
  },
  en: {
    back: 'Back',
    print: 'Print',
    contract: 'CONTRACT',
    date: 'Date',
    company: 'Company',
    client: 'Client',
    contractor: 'Contractor',
    name: 'Name',
    firmName: 'Company',
    address: 'Address',
    uic: 'UIC',
    vat: 'VAT №',
    representative: 'Representative',
    representedBy: 'Represented by',
    email: 'Email',
    phone: 'Phone',
    legalForm: 'Legal Form',
    manager: 'Manager',
    start: 'Start',
    end: 'End',
    terms: 'Terms & Conditions',
    scope: 'Scope of Work',
    payment: 'Payment Terms',
    confidentiality: 'Confidentiality & Non-Disclosure Agreement (NDA)',
    changes: 'Changes & Modifications',
    warranty: 'Warranty & Support',
    status: 'Contractor Status & Term',
    ip: 'Intellectual Property',
    termination: 'Termination',
    liability: 'Liability & Indemnification',
    law: 'Governing Law & Disputes',
    operational: 'Operational Costs',
    responsibilities: 'Responsibilities & Credential Management',
    signature: 'Signature'
  }
};

// Helper function to format dates
export function formatDateBG(date: Date | string): string {
  if (typeof date === 'string') return date;
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

