// Types for Offers (Προσφορές / Offers)
export type OfferStatus = 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';
export type OfferLanguage = 'bg' | 'en' | 'it';
export type BillingType = 'one_time' | 'monthly' | 'weekly';
export type CurrencyCode = 'BGN' | 'EUR';

export interface OfferService {
  description: string;
  quantity: number;
  unitPrice: number;
  // Optional billing classification for grouping in UI
  billing?: BillingType; // default: 'one_time'
}

export interface OfferOption {
  id: string;
  title: string;
  subtitle?: string;
  services: OfferService[];
  recommended?: boolean;
  notes?: string;
  includes?: string[]; // free-text bullet points (what's included)
  excludes?: string[]; // free-text bullet points (what's excluded or not included)
}

export interface Offer {
  id: string;
  number: string;
  title: string;
  date: string; // dd.mm.yyyy
  validForDays: number;
  place: string;
  services: OfferService[];
  status: OfferStatus;
  notes?: string;
  language?: OfferLanguage; // default: 'bg'
  currency?: CurrencyCode; // optional currency (default BGN in UI)
  options?: OfferOption[]; // optional comparison options
  commonIncludes?: string[]; // bullets common to all packages (no prices)
}

// Reuse company data and helpers from invoices module
export { COMPANY_DATA, SERVICE_TEMPLATES, addDays, calculateInvoiceTotal } from "@/app/_data/invoices";

// UI translations for offers (moved here to centralize like contracts)
export const OFFER_UI_TRANSLATIONS: Record<OfferLanguage, any> = {
  bg: {
    back: "Назад",
    backToOffers: "Назад към оферти",
    print: "Печат",
    offer: "ОФЕРТА",
    issuer: "ИЗДАТЕЛ",
    details: "ДЕТАЙЛИ",
    title: "Заглавие",
    date: "Дата",
    validUntil: "Валидна до",
    days: "дни",
    place: "Място",
    company: "Фирма",
    address: "Адрес",
    uic: "ЕИК",
    manager: "Управител",
    email: "Email",
    phone: "Телефон",
    description: "Описание",
    qty: "Кол.",
    unitPrice: "Ед. цена",
    amount: "Сума",
    info: "Информация",
    vat: "ДДС",
    vatNoteShort: "Не се начислява*",
    notInvoice: "Предложението е с информативен характер и не представлява фактура.",
    summary: "Обобщение",
    subtotal: "Междинна сума",
    total: "Общо",
    footerVat: "*Забележка: Фирмата не е регистрирана по ЗДДС.",
    notFound: "Офертата не е намерена",
    options: "Варианти (Сравнение)",
    includedFeatures: "Включени функционалности",
    oneTime: "Еднократни",
    monthly: "Месечни",
    weekly: "Седмични",
    perMonth: "на месец",
    perWeek: "на седмица",
    recommended: "Препоръчително",
    statuses: {
      accepted: "Приета",
      sent: "Изпратена",
      draft: "Чернова",
      rejected: "Отхвърлена",
      expired: "Изтекла",
    },
  },
  en: {
    back: "Back",
    backToOffers: "Back to Offers",
    print: "Print",
    offer: "OFFER",
    issuer: "ISSUER",
    details: "DETAILS",
    title: "Title",
    date: "Date",
    validUntil: "Valid until",
    days: "days",
    place: "Place",
    company: "Company",
    address: "Address",
    uic: "UIC",
    manager: "Manager",
    email: "Email",
    phone: "Phone",
    description: "Description",
    qty: "Qty",
    unitPrice: "Unit price",
    amount: "Amount",
    info: "Information",
    vat: "VAT",
    vatNoteShort: "Not applicable*",
    notInvoice: "This offer is for informational purposes and is not an invoice.",
    summary: "Summary",
    subtotal: "Subtotal",
    total: "Total",
    footerVat: "*Note: The company is not VAT registered.",
    notFound: "Offer Not Found",
    options: "Options (Comparison)",
    includedFeatures: "Included features",
    oneTime: "One-time",
    monthly: "Monthly",
    weekly: "Weekly",
    perMonth: "per month",
    perWeek: "per week",
    recommended: "Recommended",
    statuses: {
      accepted: "Accepted",
      sent: "Sent",
      draft: "Draft",
      rejected: "Rejected",
      expired: "Expired",
    },
  },
  it: {
    back: "Indietro",
    backToOffers: "Torna alle offerte",
    print: "Stampa",
    offer: "OFFERTA",
    issuer: "EMITTENTE",
    details: "DETTAGLI",
    title: "Titolo",
    date: "Data",
    validUntil: "Valida fino al",
    days: "giorni",
    place: "Luogo",
    company: "Azienda",
    address: "Indirizzo",
    uic: "UIC",
    manager: "Responsabile",
    email: "Email",
    phone: "Telefono",
    description: "Descrizione",
    qty: "Qtà",
    unitPrice: "Prezzo unitario",
    amount: "Importo",
    info: "Informazioni",
    vat: "IVA",
    vatNoteShort: "Non applicabile*",
    notInvoice: "Questa offerta è informativa e non è una fattura.",
    summary: "Riepilogo",
    subtotal: "Subtotale",
    total: "Totale",
    footerVat: "*Nota: L'azienda non è registrata IVA.",
    notFound: "Offerta non trovata",
    options: "Opzioni (Confronto)",
    includedFeatures: "Funzionalità incluse",
    oneTime: "Una tantum",
    monthly: "Mensile",
    weekly: "Settimanale",
    perMonth: "al mese",
    perWeek: "a settimana",
    recommended: "Consigliata",
    statuses: {
      accepted: "Accettata",
      sent: "Inviata",
      draft: "Bozza",
      rejected: "Rifiutata",
      expired: "Scaduta",
    },
  },
};

// Offerta: Website professionale per Avvocato (civile, consulenza online) + Marketing online
export const OFFERS: Offer[] = [
  {
    id: "OFF-LAW-2025-001",
    number: "OFF-2025-001",
    title: "Sito web professionale per Avvocato (civile, consulenza online) + Pacchetto marketing digitale",
    date: "22.10.2025",
    validForDays: 30,
    place: "Mailand",
    currency: 'EUR',
    services: [],
    status: "sent",
    notes: `L'offerta prevede la realizzazione di un sito su misura per avvocato (civile).
 - Ricerca best practice e ispirazione da siti legali.
 - Design professionale, struttura chiara e call-to-action per consulenza online.
 - Tutti i contenuti (testi/foto) forniti dal cliente per autenticità.
 - Integrazione email/PEC e modulo richiesta consulenza.
 - Pronto per futuri sviluppi (blog, calendario, video).`,
    commonIncludes: [
      'Ricerca, analisi e ispirazione da siti legali (civile) in Italia',
      'Design professionale su misura per studio legale',
      'Sito responsive (Home, Chi sono, Servizi, Consulenza online, Contatti, Privacy & Cookie)',
      'Modulo contatto / richiesta consulenza via email/PEC',
      'Setup di dominio ed email professionale',
    ],
    language: 'it',
    options: [
      {
        id: 'basic',
        title: 'Pacchetto Base',
        subtitle: 'Solo sito (senza marketing)',
        services: [
          { description: 'Realizzazione sito (una tantum)', quantity: 1, unitPrice: 1200.0, billing: 'one_time' },
          { description: 'Modulo contatto email (anti‑spam, validazione)', quantity: 1, unitPrice: 0.0, billing: 'one_time' },
        ],
        includes: [
          'Sito vetrina moderno e responsive',
          'Ricerca base per casi civili',
          'Setup pagine social',
          'Modulo contatto avanzato',
        ],
        excludes: [
          'Marketing (non incluso)',
          'SEO tecnico avanzato',
          'Produzione contenuti copy professionali',
        ],
      },
      {
        id: 'pro',
        title: 'Pacchetto Pro',
        subtitle: 'Sito + SEO tecnico + 1 mese marketing incluso + WhatsApp live chat',
        recommended: true,
        services: [
          { description: 'Sito + SEO tecnico iniziale', quantity: 1, unitPrice: 1800.0, billing: 'one_time' },
          { description: 'Marketing incluso (1 mese)', quantity: 1, unitPrice: 0.0, billing: 'one_time' },
          { description: 'WhatsApp live chat integrato nel sito', quantity: 1, unitPrice: 0.0, billing: 'one_time' },
          { description: 'Gestione marketing successiva (a settimana)', quantity: 1, unitPrice: 80.0, billing: 'weekly' },
        ],
        includes: [
          'Sito + SEO tecnico iniziale',
          'Ricerca casi civili approfondita per i contenuti',
          'Setup pagine social + campagne iniziali',
          'Piccole modifiche incluse (gratis)',
        ],
        excludes: [
          'Produzione contenuti copy professionali (non inclusa)',
        ],
      },
      
    ]
  },
];

