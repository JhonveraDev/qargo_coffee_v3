export interface HeaderButton {
  text: string;
  size: "sm" | "md" | "lg";
}

export interface HeaderImage {
  src: string;
  alt: string;
}

export interface HeaderData {
  title: string;
  description: string;
  image: HeaderImage;
  buttons: HeaderButton[];
}
