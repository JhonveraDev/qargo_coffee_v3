export type FormHeader = {
  title: string;
  description: string;
};

export type InvestmentOption =
  | "$50,000 - $100,000"
  | "$100,000 - $300,000"
  | "$300,000 - $500,000"
  | "$500,000 +";

export type TimelineOption =
  | "1-3 months"
  | "3-6 months"
  | "6-12 months"
  | "+12 months";

export type FranchiseFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  areaInterest: string;
  birthDate: string;
  address: string;
  investment: InvestmentOption;
  timeline: TimelineOption;
};

export type InputField = {
  name: keyof FranchiseFormData;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
};