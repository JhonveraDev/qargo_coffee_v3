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

export interface MenuCategory {
  id: CategoryId;
  label: string;
}

export interface Product {
  id: string;
  category: CategoryId;
  name: string;
  thumbnail: string;
  mainImage: string;
}