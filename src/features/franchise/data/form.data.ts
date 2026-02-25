import type { InputField, InvestmentOption, TimelineOption, FormHeader } from "../types/form.types";

export const headerFranchiseData: FormHeader = {
    title: "Franchise Inquiry Form",
    description: "Start your journey with Qargo Coffee by filling out this form"
}

export const inputFields: InputField[] = [
    { name: "firstName", placeholder: "First name*" },
    { name: "lastName", placeholder: "Last name*" },
    { name: "email", placeholder: "Email*", type: "email" },
    { name: "phone", placeholder: "Phone*", type: "phone" },
    { name: "state", placeholder: "State*" },
    { name: "city", placeholder: "City*" },
    { name: "areaInterest", placeholder: "Area of interest*" },
    { name: "birthDate", type: "date" },
];

export const investmentOptions: InvestmentOption[] = [
    "$50,000 - $100,000",
    "$100,000 - $300,000",
    "$300,000 - $500,000",
    "$500,000 +",
];

export const timelineOptions: TimelineOption[] = [
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "+12 months",
];