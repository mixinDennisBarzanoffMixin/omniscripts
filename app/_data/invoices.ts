// Company data (static)
export const COMPANY_DATA = {
  name: "ОмниСкриптс ЕООД",
  nameEn: "OmniScripts EOOD",
  address: "гр. Костинброд, ул. Александър Стамболийски, 2",
  eik: "208165760",
  manager: "Денис Руменов Бързанов",
  activity: "62.01 - Компютърно програмиране",
  email: "service@omniscripts.eu",
  phone: "+359 88 360 0203",
  website: "www.omniscripts.eu",
  bank: "Postbank",
  iban: "BG51 BPBI 7940 1948 6300 1",
  bic: "BPBIBGSF",
  bankAddress: "OKOLOVRASTEN PAT STR 260, SOFIA",
};

// Client data (hardcoded clients)
export const CLIENTS = {
  sintagma: {
    name: "Sintagma Real Estate",
    nameLocal: "Синтагма Недвижими Имоти ЕООД",
    address: "гр. София, ул. Витоша 15, ет. 3",
    eik: "123456789",
    manager: "Георги Петров",
    email: "contact@sintagma.co",
    phone: "+359 888 111 222",
  },
  malkotohanche: {
    name: "Malkoto Hanche Ltd",
    nameLocal: "Малкото Ханче ЕООД",
    address: "гр. Пловдив, ул. Централна 45",
    eik: "987654321",
    manager: "Мария Димитрова",
    email: "info@malkotohanche.com",
    phone: "+359 888 333 444",
  },
  rentauto: {
    name: "Rentauto Services",
    nameLocal: "Рентауто Сървисиз ООД",
    address: "гр. Варна, бул. Приморски 12",
    eik: "456789123",
    manager: "Иван Стоянов",
    email: "office@rentauto.bg",
    phone: "+359 888 555 666",
  },
  newclient: {
    name: "New Business Ventures",
    nameLocal: "Нов Бизнес Венчърс ЕООД",
    address: "гр. Бургас, ул. Богориди 8",
    eik: "789123456",
    manager: "Елена Николова",
    email: "hello@newventures.bg",
    phone: "+359 888 777 888",
  },
};

// Service templates
export const SERVICE_TEMPLATES = {
  webDevelopment: [
    {
      description: "Разработка на уеб приложение",
      quantity: 1,
      unitPrice: 15000.0,
    },
    {
      description: "UI/UX дизайн и потребителски интерфейс",
      quantity: 1,
      unitPrice: 5000.0,
    },
    {
      description: "DevOps и внедряване в облак",
      quantity: 1,
      unitPrice: 3000.0,
    },
    {
      description: "Тестване и осигуряване на качеството",
      quantity: 1,
      unitPrice: 2000.0,
    },
  ],
  ecommerce: [
    {
      description: "E-commerce платформа с пълна функционалност",
      quantity: 1,
      unitPrice: 12000.0,
    },
    {
      description: "Интеграция с платежни системи",
      quantity: 1,
      unitPrice: 3000.0,
    },
    {
      description: "Система за управление на продукти",
      quantity: 1,
      unitPrice: 4000.0,
    },
    {
      description: "Мобилна оптимизация",
      quantity: 1,
      unitPrice: 2500.0,
    },
  ],
  enterprise: [
    {
      description: "Enterprise софтуерно решение",
      quantity: 1,
      unitPrice: 25000.0,
    },
    {
      description: "API разработка и документация",
      quantity: 1,
      unitPrice: 8000.0,
    },
    {
      description: "Имплементация на сигурност",
      quantity: 1,
      unitPrice: 6000.0,
    },
    {
      description: "Load balancing и скалируемост",
      quantity: 1,
      unitPrice: 5000.0,
    },
  ],
  starter: [
    {
      description: "Портфолио уебсайт",
      quantity: 1,
      unitPrice: 2500.0,
    },
    {
      description: "SEO оптимизация",
      quantity: 1,
      unitPrice: 500.0,
    },
  ],
};

// Hardcoded invoices
export const INVOICES = [
  {
    id: "INV-001",
    number: "INV-2024-001",
    client: CLIENTS.sintagma,
    date: "15.01.2024",
    paymentTermsDays: 30,
    place: "Костинброд",
    services: SERVICE_TEMPLATES.webDevelopment,
    status: "paid",
    notes: "Професионален пакет - Платформа за недвижими имоти",
  },
  {
    id: "INV-002",
    number: "INV-2024-002",
    client: CLIENTS.malkotohanche,
    date: "20.02.2024",
    paymentTermsDays: 30,
    place: "Костинброд",
    services: SERVICE_TEMPLATES.ecommerce,
    status: "paid",
    notes: "Професионален пакет - E-commerce платформа",
  },
  {
    id: "INV-003",
    number: "INV-2024-003",
    client: CLIENTS.rentauto,
    date: "10.03.2024",
    paymentTermsDays: 30,
    place: "Костинброд",
    services: SERVICE_TEMPLATES.enterprise,
    status: "pending",
    notes: "Enterprise пакет - Платформа за рент-а-кар",
  },
  {
    id: "INV-004",
    number: "INV-2024-004",
    client: CLIENTS.newclient,
    date: "25.03.2024",
    paymentTermsDays: 30,
    place: "Костинброд",
    services: SERVICE_TEMPLATES.starter,
    status: "draft",
    notes: "Стартов пакет - Портфолио уебсайт",
  },
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

export const calculateInvoiceTotal = (services: typeof SERVICE_TEMPLATES.webDevelopment) => {
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

export const RKOS = [
  {
    id: "RKO-001",
    number: "РКО-2024-001",
    date: "15.01.2024",
    payer: "Sintagma Real Estate",
    recipient: "OmniScripts EOOD",
    purpose: "Плащане по фактура INV-2024-001 за разработка на уеб платформа",
    category: RKO_CATEGORIES.client_payment,
    amount: 25000.00,
    paymentMethod: "Банков превод",
    approvedBy: "Денис Руменов Бързанов",
    status: "completed",
    notes: "Пълно плащане за професионален пакет - недвижими имоти",
    invoiceRef: "INV-2024-001",
  },
  {
    id: "RKO-002", 
    number: "РКО-2024-002",
    date: "22.02.2024",
    payer: "Malkoto Hanche EOOD",
    recipient: "OmniScripts EOOD", 
    purpose: "Плащане по фактура INV-2024-002 за e-commerce платформа",
    category: RKO_CATEGORIES.client_payment,
    amount: 21500.00,
    paymentMethod: "Банков превод",
    approvedBy: "Денис Руменов Бързанов",
    status: "completed",
    notes: "Пълно плащане за професионален пакет - онлайн магазин",
    invoiceRef: "INV-2024-002",
  },
  {
    id: "RKO-003",
    number: "РКО-2024-003", 
    date: "05.03.2024",
    payer: "New Business Ventures EOOD",
    recipient: "OmniScripts EOOD",
    purpose: "Авансово плащане за портфолио уебсайт",
    category: RKO_CATEGORIES.advance_payment,
    amount: 1500.00,
    paymentMethod: "В брой",
    approvedBy: "Денис Руменов Бързанов", 
    status: "completed",
    notes: "50% аванс за стартов пакет",
    invoiceRef: "INV-2024-004",
  },
  {
    id: "RKO-004",
    number: "РКО-2024-004",
    date: "18.03.2024",
    payer: "Rentauto Services OOD",
    recipient: "OmniScripts EOOD",
    purpose: "Частично плащане по фактура INV-2024-003",
    category: RKO_CATEGORIES.client_payment,
    amount: 22000.00,
    paymentMethod: "Банков превод",
    approvedBy: "Денис Руменов Бързанов",
    status: "completed",
    notes: "Частично плащане 50% от enterprise пакет",
    invoiceRef: "INV-2024-003",
  },
  {
    id: "RKO-005",
    number: "РКО-2024-005",
    date: "25.03.2024", 
    payer: "Българска банка за развитие",
    recipient: "OmniScripts EOOD",
    purpose: "Безвъзмездна финансова помощ за дигитализация",
    category: RKO_CATEGORIES.grant,
    amount: 5000.00,
    paymentMethod: "Банков превод",
    approvedBy: "Денис Руменов Бързанов",
    status: "pending", 
    notes: "Европейски фонд за дигитални иновации",
  },
];
