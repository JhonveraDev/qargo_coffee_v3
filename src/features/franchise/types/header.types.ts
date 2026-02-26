export interface HeaderFranchiseButton {
  id: string;
  text: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
  path: string;
  onClick?: () => void;
}

export interface HeaderFranchiseImage {
  src: string;
  alt: string;
}

export interface HeaderFranchiseContent {
  title: string;
  description: string;
  image: HeaderFranchiseImage;
  buttons: HeaderFranchiseButton[];
}