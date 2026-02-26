export interface HeaderButton {
  id: string;
  text: string;
  size: "sm" | "md" | "lg";
  path?: string;
}

export interface HeaderImage {
  src: string;
  alt: string;
}

export interface HeaderContent {
  title: string;
  description: string;
  image: HeaderImage;
  buttons: HeaderButton[];
}
