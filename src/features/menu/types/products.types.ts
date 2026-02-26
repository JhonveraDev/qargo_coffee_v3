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

export type NutritionalFactsContent = {
  servingSize: string;
  calories: number;
  totalFat: number;
  totalFatPercent: number;
  saturatedFat: number;
  saturatedFatPercent: number;
  transFat: number;
  cholesterol: number;
  cholesterolPercent: number;
  totalCarbs: number;
  totalCarbsPercent: number;
  dietaryFiber: number;
  dietaryFiberPercent: number;
  totalSugar: number;
  addedSugar: number;
  addedSugarPercent: number;
  protein: number;
  proteinPercent: number;
  vitaminD: number;
  vitaminDPercent: number;
  calcium: number;
  calciumPercent: number;
  iron: number;
  ironPercent: number;
  potassium: number;
  potassiumPercent: number;
};

export interface ProductItem {
  id: string;
  name: string;
  thumbnail: string;
  mainImage: string;
  sizePiker: string;
  nutritionalFacts: NutritionalFactsContent;
  productUrl: string;
}

export interface Product {
  category: CategoryId;
  products: ProductItem[];
}