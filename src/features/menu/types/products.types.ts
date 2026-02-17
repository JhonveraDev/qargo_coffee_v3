export type CategoryId =
  | "hot-coffee"
  | "cold-coffee"
  | "fresh-cool"
  | "tea"
  | "boba-tea"
  | "cold-brew"
  | "energy-fresh"
  | "energy-smoothies"
  | "breakfast"
  | "lunch-sandwiches"
  | "bakery"
  | "taste-of-italy";

export interface MenuItem {
  id: CategoryId;
  label: string;
}

export interface MenuCategory {
  section: string;
  items: MenuItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  thumbnail: string;
  mainImage: string;
}

export interface Product {
  category: CategoryId;
  products: ProductItem[];
}