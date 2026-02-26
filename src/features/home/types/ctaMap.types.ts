export interface CtaMapButton {
  text: string;
  size: "sm" | "md" | "lg";
    path?: string;

}

export interface CtaMapImage {
  src: string;
  alt: string;
}

export interface CtaMapContent {
  title: string;
  description: string;
  image: CtaMapImage;
  button: CtaMapButton;
}