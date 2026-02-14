export type CategoryId = "hot-coffee" | "cold-coffee" | "fresh-cool";

export interface MenuCategory {
  id: CategoryId;
  label: string;
}

export interface Product {
  id: number;
  category: CategoryId;
  name: string;
}