// Types
export type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'cancelled' | 'overdue';

export interface Service {
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface Client {
  name: string;
  nameLocal: string;
  address: string;
  city: string;
  postalCode: string;
  eik: string;
  vatNumber: string;
  manager: string;
  managerEgn?: string;
  managerIdCard?: string;
  managerIdIssuePlace?: string;
  managerIdIssueDate?: string;
  email: string;
  phone: string;
  bank?: string;
  iban?: string;
  bic?: string;
}

export interface Invoice {
  id: string;
  number: string;
  client: Client;
  date: string;
  paymentTermsDays: number;
  place: string;
  services: Service[];
  status: InvoiceStatus;
  notes?: string;
}

// Company data (static)
export const COMPANY_DATA = {
  name: "ОмниСкриптс ЕООД",
  nameEn: "OmniScripts LTD",
  address: "гр. Костинброд, ул. Александър Стамболийски, 2",
  city: "Костинброд",
  postalCode: "2230",
  eik: "208165760",
  vatNumber: "",
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
  malkotohanche: {
    name: "StrongPlast Ltd",
    nameLocal: "СТРОНГПЛАСТ ЕООД",
    address: "ул. Александър Стамболийски 3, гр. Костинброд",
    city: "Костинброд",
    postalCode: "2230",
    eik: "175352689",
    vatNumber: "-",
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
  carsbg11: {
    name: "CarsBG-11 LTD",
    nameLocal: "КАРСБГ-11 ООД",
    address: 'ж.к. Люлин 1, бул. "Сливница" 357А, 1360 София',
    city: "София",
    postalCode: "1360",
    eik: "204743277",
    vatNumber: "-",
    manager: "Елеонора Богданова Хардалиева",
    // The below fields do not have EGN/лична карта info by default
    // managerEgn: "",
    // managerIdCard: "",
    // managerIdIssuePlace: "",
    // managerIdIssueDate: "",
    email: "rentauto@abv.bg",
    phone: "—",
    // No bank info known for this client in contract context
    // bank: "",
    // iban: "",
    // bic: ""
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
  carWebsiteIvan: [
    {
      description: "Авансово плащане за направата на сайт",
      quantity: 1,
      unitPrice: 6500.0,
    }
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
    status: "paid",
    notes: "Професионален пакет - E-commerce платформа",
  },
  {
    id: "INV-002",
    number: "INV-2025-002",
    client: CLIENTS.malkotohanche,
    date: "17.10.2025",
    paymentTermsDays: 30,
    place: "Костинброд",
    services: [
      {
        description: "Актуализация на сайта в евро и лева",
        quantity: 1,
        unitPrice: 40.0,
      },
    ],
    status: "paid",
    notes: "Към Професионален пакет - E-commerce платформа",
  },
  // {
  //   id: "INV-002",
  //   number: "INV-2025-002",
  //   client: CLIENTS.carsbg11,
  //   date: "14.10.2025",
  //   paymentTermsDays: 30,
  //   place: "София",
  //   services: SERVICE_TEMPLATES.carWebsiteIvan,
  //   status: "pending",
  //   notes: "Професионален пакет - Уебсайт за автомобили",
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

// ПКО (Приходен касов ордер) - Incoming Cash Orders (Money received by OmniScripts)
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
  type: 'income' | 'expense'; // ПКО (приходен) или РКО (разходен)
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
];
