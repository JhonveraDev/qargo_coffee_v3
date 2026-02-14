type Item = {
  name: string;
  slug: string;
};

export type SideMenuContent = {
  title: string;
  items: Item[];
};

export type SideMenuProductContent = {
  id: number;
  title: string;
  src: string;
  alt: string;
  url: string;
}