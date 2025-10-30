// Contract Types
import type { Contract, ContractLanguage } from "@/app/_data/contractTypes";
import { createWebsiteContractorContractEn } from "@/app/_lib/contractTemplates";

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
    status: "active",
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
            "Обща цена: 4,000 лв.",
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
    status: "active",
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
  },
  {
    id: "vanya-contract",
    number: "CTR-2025-CL-001", //client
    type: "website",
    language: "bg",
    title: "Договор за изработка на уебсайт",
    titleLocal: "Website Development Agreement",
    status: "active",
    startDate: "01.09.2025",
    endDate: "01.10.2025",
    client: {
      nameLocal: "СТРОНГПЛАСТ ЕООД",
      nameEn: "STRONGPLAST LTD",
      eik: "175352689",
      vatNumber: "BG175352689",
      legalForm: "Еднолично дружество с ограничена отговорност (ЕООД)",
      address: "ул. Александър Стамболийски 3, 2230 Костинброд, България",
      email: "info@malkotohanche.com",
      phone: "+359 879 399 088",
      manager: "Иванка Георгиева Благоева"
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
            "Изработка на уебсайт мобилен маркет с модерен responsive дизайн.",
            "Интеграция на съдържание, форма за контакт, SEO настройка.",
            "Система за управление на продуктите без намеса на изпълнителя.",
            "Обучение на Възложителя как да използва системата.",
            "Технологии по избор на Изпълнителя."
          ]
        },
        {
          title: "Цена и плащане",
          points: [
            "Обща цена: 1,500 лв.",
            "Плащане след финално приемане.",
            `Плащане по банков път към IBAN: ${COMPANY_DATA.iban}, Bank: ${COMPANY_DATA.bank}, BIC: ${COMPANY_DATA.bic}.`
          ]
        },
        {
          title: "Предаване и приемане",
          points: [
            "Възложителят има 30 работни дни за писмени забележки.",
            "При липса на забележки в срока: приемане по право."
          ]
        },
        {
          title: "Оперативни разходи на сайта",
          points: [
            "Оперативните разходи се поемат първо от Изпълнителя, а след това от Възложителя, който възстановява сумата чрез фактура. "
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
            "Промени и разширения изискват допълнително заплащане.",
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
        }
      ]
    }
  },
  {
    id: "webcar-designer",
    number: "CTR-2025-WS-003", // freelancer, task-based
    type: "freelancer",
    language: "bg",
    title: "Граждански договор за дизайн изработка",
    titleLocal: "Civil Contract for Design",
    status: "pending",
    startDate: "24.10.2025",
    endDate: "23.11.2025",
    client: {
      nameLocal: "Виктория Младенова",
      nameEn: "Viktoria Mladenova",
      egn: "0552186774",
      address: "ул. Янко Забунов 23, гр. Костинброд",
      phone: "0889003790",
      email: "viktoriamladenova30soy@gmail.com",
      manager: "Виктория Младенова",
      bankAccount: "BG31STSA93000030316979",
      bankName: "Банка ДСК АД"
    },
    terms: {
      definitions: [
        `"Задача": Изработка на дизайн за уебсайт carsbg.eu: 1) Главна/Търсене страница; 2) Детайли за автомобил + контакт; 3) "Theme" страница с цветове и шрифтове.`,
        `"Възнаграждение": Фиксирано възнаграждение 100 лв. за задачата, освен ако не е уговорено друго.`,
        `"Приемане": Писмено потвърждение от Възложителя или изтичане на срока за преглед без възражения.`,
        `"Рамка": Договорът е за конкретната задача; допълнителни задачи могат да се възлагат с допълнително писмено съгласие (анекс/задание).`
      ],
      clauses: [
        {
          title: "Обхват на работата",
          points: [
            "Дизайн на: Главна/Търсене страница; Детайли за автомобил + Контакт; 'Theme' страница (цветове и шрифтове).",
            "Доставяне като Figma файл, освен ако не е уговорено друго.",
            "Без изискване за работно време или място на работа; изпълнението е резултатно, не почасово."
          ]
        },
        {
          title: "Срок",
          points: [
            "Срок за изпълнение: до 21 календарни дни от възлагането, освен ако не е уговорено друго.",
            "Възложителят предоставя необходимите материали/насоки при стартиране."
          ]
        },
        {
          title: "Цена и плащане",
          points: [
            "Фиксирана цена: 200 лв. (бруто) за задачата, освен ако не е уговорено друго.",
            `Плащане до 5 работни дни след приемане, в брой с касова бележка или по банков път към IBAN: BG31STSA93000030316979, Банка: Банка ДСК АД.`,
            "Данък по ЗДДФЛ 10% се удържа върху 75% от сумата (след нормативно признати разходи 25%).",
            "Осигуровки се дължат само при наличие на друго осигуряване за месеца или ако доходът достига минималната работна заплата – иначе не се начисляват."
          ]
        },
        {
          title: "Приемане",
          points: [
            "Изпълнителят предава дизайните; Възложителят има 3 работни дни за писмени забележки.",
            "При липса на забележки в срока, работата се счита за приета.",
            "Поправки в разумен обем в рамките на задачата – без допълнително заплащане; извън-обхват изисква ново задание."
          ]
        },
        {
          title: "Права върху резултата",
          points: [
            "Всички права върху крайния резултат преминават към Възложителя след пълно плащане.",
            "Предварително съществуващи инструменти/ресурси на Изпълнителя не се прехвърлят.",
            "Изпълнителят може да показва работата в портфолио без поверителни данни, освен ако не е уговорено друго."
          ]
        },
        {
          title: "Поверителност",
          points: [
            "Страните пазят поверителна информация; задължението продължава безсрочно.",
            "Достъпни идентификационни данни не се споделят с трети лица."
          ]
        },
        {
          title: "Независим изпълнител",
          points: [
            "Страните потвърждават, че това не е трудово правоотношение.",
            "Няма работно време/дисциплинарна подчиненост; плаща се за резултат, не за часове."
          ]
        },
        {
          title: "Прекратяване",
          points: [
            "Всяка страна може да прекрати с 7 дни писмено предизвестие до приемане.",
            "При съществено нарушение – незабавно прекратяване.",
            "При прекратяване се заплаща реално свършената и приета работа."
          ]
        },
        {
          title: "Документи",
          points: [
            "Възложителят издава 'Сметка за изплатени суми' и 'Служебна бележка' съгласно закона.",
            "Настоящите документи могат да бъдат подготвени в чернова и финализирани при плащане/в края на годината."
          ]
        },
        {
          title: "Приложимо право",
          points: [
            "Българско право; компетентен съд – София.",
            "Страните полагат усилия за добронамерено уреждане преди съд."
          ]
        }
      ]
    },
    notes: "Проект carsbg.eu – еднократна задача; документите са чернова до плащане."
  },
  {
    id: "saad-ali-abbasi",
    number: "CTR-2025-WS-004", //freelancer
    type: "freelancer",
    language: "en",
    title: "Freelance Web Development Agreement",
    titleLocal: "Граждански договор за уеб разработка",
    status: "active",
    startDate: "20.10.2025",
    client: {
      nameLocal: "Saad Ali Abbasi",
      nameEn: "Saad Ali Abbasi",
      cnic: "3740423977455",
      address: "I-10/4 street 26 house 1113 Islamabad, Pakistan",
      phone: "+92 331 9525595",
      email: "saadaliabbasi2347@gmail.com",
      manager: "Saad Ali Abbasi",
      bankAccount: "PK95MEZN0003020110099471",
      bankName: "Meezan Bank",
    },
    terms: {
      definitions: [
        `"Work Result": The final website, web application, or related code produced as a deliverable under this agreement, except for pre-existing libraries, frameworks, or third-party components used by the Contractor.`,
        `"Freelancer": The independent contractor undertaking assigned tasks for the Company on a per-project basis, not as an employee.`,
        `"Confidential Information": Any proprietary, business, technical, or financial information disclosed by either party during this Agreement.`
      ],
      clauses: [
        {
          title: "Scope of Work",
          points: [
            "Design, development, and implementation of web projects as detailed in written task briefs.",
            "Freelancer chooses technologies suitable to the task, unless stated otherwise.",
            "Deliverables and milestones defined in each task/order."
          ]
        },
        {
          title: "Payment Terms",
          points: [
            "Payment is per completed and accepted project/task.",
            "Fees are specified and agreed upon prior to commencement of each task.",
            "Invoices (or written payment requests) to be issued by the Freelancer upon completion and acceptance of deliverables.",
            "Payment to be made via bank transfer to account details provided by the Freelancer or through Wise (License with reg. code Registration code: 0713629988 or Payoneer (License #C189473, regulated under the Bank of Ireland)." 
          ]
        },
        {
          title: "Provision of Tools and Licenses",
          points: [
            "If the Freelancer does not possess the necessary tools, software, or licenses essential for the completion of the assigned task, the Company shall provide an additional budget to cover these costs.",
            "The Company may fulfill this obligation either by directly providing access/licenses, or by reimbursing the Freelancer based on an invoice, in which case the Freelancer obtains the required tool or license in their own name and submits an official invoice/receipt to the Company.",
            "The purchase and reimbursement of such tools require written pre-approval by the Company prior to sourcing.",
            "Any tools or licenses purchased and reimbursed in the Freelancer's own name remain the property of the Freelancer after project completion, unless otherwise agreed in writing."
          ]
        },
        {
          title: "Taxes",
          points: [
            "If the Freelancer provides a valid Tax Residence Certificate, taxation in Bulgaria will follow Article 9",
            "(“Elimination of Double Taxation”) of the Convention between the Republic of Bulgaria and the Islamic Republic of Pakistan",
            "for the Avoidance of Double Taxation and the Prevention of Fiscal Evasion with respect to Taxes on Income (signed 21 May 2019). ",
            "In such case, income tax will not be withheld at source in Bulgaria, provided the requirements of Article 9 of the treaty are me", 
            "and the Freelancer is recognized as a resident of Pakistan for tax purposes.",
            "If the Freelancer does not provide a valid Tax Residence Certificate, taxation in Bulgaria will follow the Bulgarian tax law."
          ]
        },
        {
          title: "Acceptance",
          points: [
            "Client reviews deliverables within 15 business days.",
            "Deliverables are deemed accepted unless written objections are raised within the review period."
          ]
        },
        {
          title: "Rights to Work Result",
          points: [
            "All rights to the final deliverables are transferred to the Client upon full payment.",
            "Pre-existing tools, resources, and libraries of the Freelancer are not transferred.",
            "The Freelancer may showcase non-confidential work in a portfolio unless otherwise agreed."
          ]
        },
        {
          title: "Confidentiality",
          points: [
            "Both parties agree to treat all Confidential Information as strictly confidential.",
            "Access credentials or sensitive information will not be shared with third parties."
          ]
        },
        {
          title: "Independent Contractor",
          points: [
            "The relationship is not one of employment; the Freelancer works independently.",
            "No working hours, payroll benefits, or subordination; payment is per result, not per time."
          ]
        },
        {
          title: "Termination",
          points: [
            "Either party may terminate with 7 days written notice prior to acceptance.",
            "Immediate termination is possible in case of material breach.",
            "Upon termination, all accepted work is paid as per agreement; no payment for unaccepted work."
          ]
        },
        {
          title: "Documentation",
          points: [
            "Necessary statements and payment documents must be prepared by parties as required by law and agreement.",
            "Drafts may be created and finalized upon payment or annual closure."
          ]
        },
        {
          title: "Governing Law",
          points: [
            "Bulgarian law applies; competent court – Sofia unless otherwise stated.",
            "Both parties strive for amicable resolution prior to legal action."
          ]
        }
      ]
    },
    notes: "Freelancer contract for individual web development tasks; payment only upon accepted deliverables. Documents may remain in draft form until settlement."
  },
  createWebsiteContractorContractEn({
    id: "kiran-ahmad",
    number: "CTR-2025-WS-005",
    startDate: "23.10.2025",
    status: "active",
    contractor: {
      nameLocal: "Kiran Ahmad",
      nameEn: "Kiran Ahmad",
      cnic: "14301-1199011-4",
      address: "Happy valley Kohat Kpk near children park",
      phone: "+92 331 9696940",
      email: "kiran.ahmad.usman@gmail.com",
      manager: "Kiran Ahmad",
      bankAccount: "PK29MEZN0000300109403559",
      bankName: "Meezan Bank - Meezan Digital Center"
    },
    paymentWisePayoneerOnly: true
  }),
createWebsiteContractorContractEn({
  id: "syed-ali-asghar",
  number: "CTR-2025-WS-006",
  startDate: "23.10.2025",
  status: "active",
  contractor: {
    nameLocal: "Syed Ali Asghar",
    nameEn: "Syed Ali Asghar",
    cnic: "34603-5563963-1",
    address: "Umer Academy Street, Defence Road, Sialkot, Pakistan",
    phone: "03338622122",
    email: "aligee512@gmail.com",
    manager: "-",
    bankAccount: "PK05NAYA1234503328622123",
    bankName: "NAYAPAY"
  },
  paymentWisePayoneerOnly: true
}),
createWebsiteContractorContractEn({
  id: "muhammad-ashir",
  number: "CTR-2025-WS-007",
  startDate: "23.10.2025",
  status: "active",
  contractor: {
    nameLocal: "Muhammad Ashir",
    nameEn: "Muhammad Ashir",
    cnic: "42201-3980178-1",
    address: "Rabia city block d1 flat no 41 3rd floor, gulistan e johar, karachi",
    phone: "+923368272591",
    email: "shaikhashir871@gmail.com",
    manager: "-",
    bankAccount: "PK80ASCM0003710350003094",
    bankName: "Askari bank , Muhammad Ashir"
  },
  paymentWisePayoneerOnly: true
}),
createWebsiteContractorContractEn({
  id: "muhammed-umar",
  number: "CTR-2025-WS-008",
  startDate: "23.10.2025",
  status: "active",
  contractor: {
    nameLocal: "Muhammed Umar",
    nameEn: "Muhammed Umar",
    cnic: "42301-2029631-5",
    address: "SHOE MARKET GHOSIA PLAZA G W R 24 FLAT NUMBER GARDEN WEST KARACHI WEST",
    phone: "+92 3186960656",
    email: "umartkd989@gmail.com",
    manager: "-",
    bankAccount: "PK52UNIL0109000312764519",
    bankName: "United Bank Limited (UBL)"
  },
  paymentWisePayoneerOnly: true
}),
createWebsiteContractorContractEn({
  id: "kafayat-ullah",
  number: "CTR-2025-WS-009",
  startDate: "23.10.2025",
  status: "draft",
  contractor: {
    nameLocal: "Kafayat Ullah",
    nameEn: "Kafayat Ullah",
    cnic: "14302-2340898-1",
    address: "I-14, Bhata Chowk, Islamabad.",
    phone: "+923329868850",
    email: "kafayatullah000@gmail.com",
    manager: "-",
    bankAccount: "",
    bankName: ""
  },
  paymentWisePayoneerOnly: true
}),
createWebsiteContractorContractEn({
  id: "ashar-ali",
  number: "CTR-2025-WS-010",
  startDate: "28.10.2025",
  status: "pending",
  contractor: {
    nameLocal: "Ashar Ali",
    nameEn: "Ashar Ali",
    cnic: "34601-4553888-9",
    address: "171, Greenpark, Lahore.",
    phone: "+923209055678",
    email: "email.asharalii@gmail.com",
    manager: "-",
    bankAccount: "PK69BAHL0022009500806501",
    bankName: "Bank Al Habib, Ashar Ali"
  },
  paymentWisePayoneerOnly: true
}),
createWebsiteContractorContractEn({
  id: "amsil-sarim",
  number: "CTR-2025-WS-011",
  startDate: "", // Please fill in the actual start date
  status: "draft",
  contractor: {
    nameLocal: "Amsil Sarim",
    nameEn: "Amsil Sarim",
    cnic: "36502-1538650-9",
    address: "627, block F2, Wapda Town, Lahore",
    email: "amsil.engr@gmail.com",
    phone: "0313-4046179",
    manager: "-",
    bankAccount: "PK17MEZN0002060101106695",
    bankName: "Meezan Bank, AMSIL SARIM, Swift: MEZNPKKALH2"
  },
  paymentWisePayoneerOnly: true
}),



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
  },
};

// Helper function to format dates
export function formatDateBG(date: Date | string): string {
  if (typeof date === 'string') return date;
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

