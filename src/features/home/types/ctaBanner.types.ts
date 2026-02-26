export interface CtaButton {
  id: string;
  text: string;
  size: "sm" | "md" | "lg";
  path?: string;
}

export interface CtaBannerImage {
  src: string;
  alt: string;
}

export interface CtaBannerContent {
  title: string;
  description: string;
  image: CtaBannerImage;
  buttons: CtaButton[];
}