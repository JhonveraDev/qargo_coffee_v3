export interface ctaContactButton {
  id: string;
  text: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
}

export interface CtaContactContent {
  title: string;
  description: string;
  buttons: ctaContactButton[];
}