export interface ctaContactButton {
  id: string;
  text: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
  path: string;
  onClick?: () => void;
}

export interface CtaContactContent {
  title: string;
  description: string;
  buttons: ctaContactButton[];
}