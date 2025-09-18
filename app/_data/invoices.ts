// Company data (static)
export const COMPANY_DATA = {
  name: "ОмниСкриптс ЕООД",
  nameEn: "OmniScripts LTD",
  address: "гр. Костинброд, ул. Александър Стамболийски, 2",
  city: "Костинброд",
  postalCode: "2230",
  eik: "208165760",
  vatNumber: "BG208165760",
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
  // Accounting and signature data
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

// Client data (hardcoded clients)
export const CLIENTS = {
  // sintagma: {
  //   name: "Sintagma Real Estate",
  //   nameLocal: "Синтагма Недвижими Имоти ЕООД",
  //   address: "гр. София, ул. Витоша 15, ет. 3",
  //   city: "София",
  //   postalCode: "1000",
  //   eik: "123456789",
  //   vatNumber: "BG123456789",
  //   manager: "Георги Петров",
  //   managerEgn: "8010151234",
  //   managerIdCard: "123456789",
  //   managerIdIssuePlace: "МВР София",
  //   managerIdIssueDate: "15.01.2020",
  //   email: "contact@sintagma.co",
  //   phone: "+359 888 111 222",
  //   bank: "УниКредит Булбанк",
  //   iban: "BG80 UNCR 7630 1234 5678 90",
  //   bic: "UNCRBGSF"
  // },
  malkotohanche: {
    name: "StrongPlast Ltd",
    nameLocal: "СТРОНГПЛАСТ ЕООД",
    address: "ул. Александър Стамболийски 3, гр. Костинброд",
    city: "Костинброд",
    postalCode: "2230",
    eik: "175352689",
    vatNumber: "BG175352689",
    manager: "Иванка Георгиева Благоева",
    managerEgn: "7505201987",
    managerIdCard: "987654321",
    managerIdIssuePlace: "МВР Пловдив",
    managerIdIssueDate: "22.03.2018",
    email: "info@malkotohanche.com",
    phone: "+359 879 399 088",
    // bank: "ДСК Банк",
    // iban: "BG56 STSA 9300 0012 3456 78",
    // bic: "STSABGSF"
  },
  newclient: {
    name: "New Business Ventures",
    nameLocal: "Нов Бизнес Венчърс ЕООД",
    address: "гр. Бургас, ул. Богориди 8",
    city: "Бургас",
    postalCode: "8000",
    eik: "789123456",
    vatNumber: "BG789123456",
    manager: "Елена Николова",
    managerEgn: "7803154567",
    managerIdCard: "789123456",
    managerIdIssuePlace: "МВР Бургас",
    managerIdIssueDate: "05.12.2021",
    email: "hello@newventures.bg",
    phone: "+359 888 777 888",
    bank: "Първа инвестиционна банка",
    iban: "BG11 FINV 9150 0012 3456 78",
    bic: "FINVBGSF"
  },
};

// Service templates
export const SERVICE_TEMPLATES = {
  // webDevelopment: [
  //   {
  //     description: "Разработка на уеб приложение",
  //     quantity: 1,
  //     unitPrice: 15000.0,
  //   },
  //   {
  //     description: "UI/UX дизайн и потребителски интерфейс",
  //     quantity: 1,
  //     unitPrice: 5000.0,
  //   },
  //   {
  //     description: "DevOps и внедряване в облак",
  //     quantity: 1,
  //     unitPrice: 3000.0,
  //   },
  //   {
  //     description: "Тестване и осигуряване на качеството",
  //     quantity: 1,
  //     unitPrice: 2000.0,
  //   },
  // ],
  ecommerceCheap: [
    {
      description: "E-commerce платформа с базова функционалност",
      quantity: 1,
      unitPrice: 800.0,
    },
    {
      description: "Система за управление на продукти",
      quantity: 1,
      unitPrice: 400.0,
    },
    {
      description: "Контактна форма и интеграция на система за обаждане",
      quantity: 1,
      unitPrice: 300.0,
    },
  ],
  // enterprise: [
  //   {
  //     description: "Enterprise софтуерно решение",
  //     quantity: 1,
  //     unitPrice: 25000.0,
  //   },
  //   {
  //     description: "API разработка и документация",
  //     quantity: 1,
  //     unitPrice: 8000.0,
  //   },
  //   {
  //     description: "Имплементация на сигурност",
  //     quantity: 1,
  //     unitPrice: 6000.0,
  //   },
  //   {
  //     description: "Load balancing и скалируемост",
  //     quantity: 1,
  //     unitPrice: 5000.0,
  //   },
  // ],
  // starter: [
  //   {
  //     description: "Портфолио уебсайт",
  //     quantity: 1,
  //     unitPrice: 2500.0,
  //   },
  //   {
  //     description: "SEO оптимизация",
  //     quantity: 1,
  //     unitPrice: 500.0,
  //   },
  // ],
};

// Hardcoded invoices
export const INVOICES = [
  {
    id: "INV-001",
    number: "INV-2025-001",
    client: CLIENTS.malkotohanche,
    date: "01.09.2025",
    paymentTermsDays: 30,
    place: "Костинброд",
    services: SERVICE_TEMPLATES.ecommerceCheap,
    status: "pending",
    notes: "Професионален пакет - E-commerce платформа",
  },
  // {
  //   id: "INV-002",
  //   number: "INV-2024-002",
  //   client: CLIENTS.sintagma,
  //   date: "15.01.2024",
  //   paymentTermsDays: 30,
  //   place: "Костинброд",
  //   services: SERVICE_TEMPLATES.webDevelopment,
  //   status: "paid",
  //   notes: "Професионален пакет - Платформа за недвижими имоти",
  // },
];

// Utility functions
export const addDays = (date: string, days: number): string => {
  const [day, month, year] = date.split(".").map(Number);
  const newDate = new Date(year, month - 1, day);
  newDate.setDate(newDate.getDate() + days);
  return `${newDate.getDate().toString().padStart(2, "0")}.${(newDate.getMonth() + 1).toString().padStart(2, "0")}.${newDate.getFullYear()}`;
};

export const calculateServiceTotal = (quantity: number, unitPrice: number): number => {
  return quantity * unitPrice;
};

export const calculateInvoiceTotal = (services: typeof SERVICE_TEMPLATES.ecommerceCheap) => {
  const servicesWithTotals = services.map((service, index) => ({
    id: index + 1,
    ...service,
    total: calculateServiceTotal(service.quantity, service.unitPrice),
  }));

  const subtotal = servicesWithTotals.reduce(
    (sum, service) => sum + service.total,
    0,
  );

  return {
    services: servicesWithTotals,
    totals: {
      subtotal,
      total: subtotal, // No VAT
    },
  };
};

// RKO (Разходен касов ордер) - Incoming Cash Orders (Money received by OmniScripts)
export const RKO_CATEGORIES = {
  client_payment: "Плащане от клиент",
  advance_payment: "Авансово плащане", 
  refund: "Възстановяване",
  loan: "Заем",
  investment: "Инвестиция",
  grant: "Безвъзмездна помощ",
  other: "Други приходи",
};

// Accounting codes for RKO classification
export const ACCOUNTING_CODES = {
  client_payment: {
    debit: "501", // Касова наличност
    credit: "411", // Клиенти
    description: "Постъпване на плащания от клиенти"
  },
  advance_payment: {
    debit: "501", // Касова наличност  
    credit: "479", // Други краткосрочни задължения
    description: "Постъпване на авансови плащания"
  },
  grant: {
    debit: "501", // Касова наличност
    credit: "741", // Други финансови приходи
    description: "Безвъзмездни средства и субсидии"
  },
  other: {
    debit: "501", // Касова наличност
    credit: "708", // Други приходи
    description: "Други постъпления"
  }
};

// Document series and forms
export const DOCUMENT_SERIES = {
  rko: {
    series: "1-1401хим.",
    form: "*Веа - 33",
    approvalDate: "03.2008",
    barcode: "3||8 0 0 1 4 6 ||8 0 0 3"
  }
};

type RKO = {
  id: string;
  number: string;
  date: string;
  payer: string;
  payerData: any;
  recipient: string;
  purpose: string;
  category: string;
  amount: number;
  paymentMethod: string;
  bankReference?: string;
  approvedBy: string;
  processedBy: string;
  accountingCode: any;
  status: 'pending' | 'completed' | 'cancelled';
  notes?: string;
  invoiceRef?: string;
  documentSeries: any;
  receivedBy?: {
    name: string;
    egn: string;
    idCard: string;
    issuedBy: string;
    issuedOn: string;
  };
};

export const RKOS: RKO[] = [
  // {
  //   id: "RKO-001",
  //   number: "РКО-2024-001",
  //   date: "15.01.2024",
  //   payer: "Sintagma Real Estate",
  //   payerData: CLIENTS.sintagma,
  //   recipient: "OmniScripts EOOD",
  //   purpose: "Плащане по фактура INV-2024-001 за разработка на уеб платформа",
  //   category: RKO_CATEGORIES.client_payment,
  //   amount: 25000.00,
  //   paymentMethod: "Банков превод",
  //   bankReference: "BT240115001",
  //   approvedBy: "Денис Руменов Бързанов",
  //   processedBy: COMPANY_DATA.cashier.name,
  //   accountingCode: ACCOUNTING_CODES.client_payment,
  //   status: "completed",
  //   notes: "Пълно плащане за професионален пакет - недвижими имоти",
  //   invoiceRef: "INV-2024-001",
  //   documentSeries: DOCUMENT_SERIES.rko,
  //   receivedBy: {
  //     name: "Георги Петров",
  //     egn: "8010151234",
  //     idCard: "123456789",
  //     issuedBy: "МВР София",
  //     issuedOn: "15.01.2020"
  //   }
  // },
  // {
  //   id: "RKO-002", 
  //   number: "РКО-2024-002",
  //   date: "22.02.2024",
  //   payer: "Malkoto Hanche EOOD",
  //   payerData: CLIENTS.malkotohanche,
  //   recipient: "OmniScripts EOOD", 
  //   purpose: "Плащане по фактура INV-2024-002 за e-commerce платформа",
  //   category: RKO_CATEGORIES.client_payment,
  //   amount: 21500.00,
  //   paymentMethod: "Банков превод",
  //   bankReference: "BT240222001",
  //   approvedBy: "Денис Руменов Бързанов",
  //   processedBy: COMPANY_DATA.cashier.name,
  //   accountingCode: ACCOUNTING_CODES.client_payment,
  //   status: "completed",
  //   notes: "Пълно плащане за професионален пакет - онлайн магазин",
  //   invoiceRef: "INV-2024-002",
  //   documentSeries: DOCUMENT_SERIES.rko,
  //   receivedBy: {
  //     name: "Мария Димитрова",
  //     egn: "7505201987",
  //     idCard: "987654321",
  //     issuedBy: "МВР Пловдив",
  //     issuedOn: "22.03.2018"
  //   }
  // },
  // {
  //   id: "RKO-003",
  //   number: "РКО-2024-003", 
  //   date: "05.03.2024",
  //   payer: "New Business Ventures EOOD",
  //   payerData: CLIENTS.newclient,
  //   recipient: "OmniScripts EOOD",
  //   purpose: "Авансово плащане за портфолио уебсайт",
  //   category: RKO_CATEGORIES.advance_payment,
  //   amount: 1500.00,
  //   paymentMethod: "В брой",
  //   bankReference: null,
  //   approvedBy: "Денис Руменов Бързанов", 
  //   processedBy: COMPANY_DATA.cashier.name,
  //   accountingCode: ACCOUNTING_CODES.advance_payment,
  //   status: "completed",
  //   notes: "50% аванс за стартов пакет",
  //   invoiceRef: "INV-2024-004",
  //   documentSeries: DOCUMENT_SERIES.rko,
  //   receivedBy: {
  //     name: "Елена Николова",
  //     egn: "7803154567",
  //     idCard: "789123456",
  //     issuedBy: "МВР Бургас",
  //     issuedOn: "05.12.2021"
  //   }
  // },
  // {
  //   id: "RKO-004",
  //   number: "РКО-2024-004",
  //   date: "18.03.2024",
  //   payer: "Rentauto Services OOD",
  //   payerData: CLIENTS.rentauto,
  //   recipient: "OmniScripts EOOD",
  //   purpose: "Частично плащане по фактура INV-2024-003",
  //   category: RKO_CATEGORIES.client_payment,
  //   amount: 22000.00,
  //   paymentMethod: "Банков превод",
  //   bankReference: "BT240318001",
  //   approvedBy: "Денис Руменов Бързанов",
  //   processedBy: COMPANY_DATA.cashier.name,
  //   accountingCode: ACCOUNTING_CODES.client_payment,
  //   status: "completed",
  //   notes: "Частично плащане 50% от enterprise пакет",
  //   invoiceRef: "INV-2024-003",
  //   documentSeries: DOCUMENT_SERIES.rko,
  //   receivedBy: {
  //     name: "Иван Стоянов",
  //     egn: "8212103456",
  //     idCard: "456789123",
  //     issuedBy: "МВР Варна",
  //     issuedOn: "10.07.2019"
  //   }
  // },
  // {
  //   id: "RKO-005",
  //   number: "РКО-2024-005",
  //   date: "25.03.2024", 
  //   payer: "Българска банка за развитие",
  //   payerData: {
  //     name: "Българска банка за развитие АД",
  //     nameLocal: "Българска банка за развитие АД",
  //     address: "гр. София, ул. Веслец 7",
  //     city: "София", 
  //     postalCode: "1000",
  //     eik: "831629564",
  //     vatNumber: "BG831629564",
  //     manager: "Стоян Мавродиев",
  //     managerEgn: "6801011234",
  //     managerIdCard: "123654789",
  //     managerIdIssuePlace: "МВР София",
  //     managerIdIssueDate: "15.05.2015",
  //     email: "info@bbr.bg",
  //     phone: "+359 2 940 7400",
  //     bank: "Българска народна банка",
  //     iban: "BG80 BNBG 9661 1000 1001 01",
  //     bic: "BNBGBGSF"
  //   },
  //   recipient: "OmniScripts EOOD",
  //   purpose: "Безвъзмездна финансова помощ за дигитализация",
  //   category: RKO_CATEGORIES.grant,
  //   amount: 5000.00,
  //   paymentMethod: "Банков превод",
  //   bankReference: "GT240325001",
  //   approvedBy: "Денис Руменов Бързанов",
  //   processedBy: COMPANY_DATA.cashier.name,
  //   accountingCode: ACCOUNTING_CODES.grant,
  //   status: "pending", 
  //   notes: "Европейски фонд за дигитални иновации",
  //   invoiceRef: null,
  //   documentSeries: DOCUMENT_SERIES.rko,
  //   receivedBy: {
  //     name: "Стоян Мавродиев",
  //     egn: "6801011234",
  //     idCard: "123654789",
  //     issuedBy: "МВР София",
  //     issuedOn: "15.05.2015"
  //   }
  // },
];
