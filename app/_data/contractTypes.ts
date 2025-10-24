// Shared contract type definitions (no runtime values here)

export type ContractType = 'website' | 'marketing' | 'freelancer' | 'nda';
export type ContractLanguage = 'bg' | 'en';

export interface ContractParty {
  nameLocal: string;
  nameEn?: string;
  address: string;
  eik?: string; // EIK for Bulgarian entities
  vatNumber?: string; // VAT number
  cnic?: string; // CNIC for Pakistani individuals
  egn?: string; // EGN for Bulgarian individuals
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


