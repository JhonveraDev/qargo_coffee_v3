import type { MenuCategory } from "../types/products.types";

export const menuCategories: MenuCategory[] = [
  {
    section: "Drinks",
    items: [
      { id: "hot-coffee", label: "Hot Coffee" },
      { id: "cold-coffee", label: "Cold Coffee" },
      { id: "fresh-cool", label: "Fresh & Cool" },
      { id: "tea", label: "Tea" },
      { id: "boba-tea", label: "Boba Tea" },
      { id: "cold-brew", label: "Cold Brew" },
      { id: "energy-fresh", label: "Energy Fresh" },
      { id: "energy-smoothies", label: "Energy Smoothies" },
    ],
  },
  {
    section: "Food",
    items: [
      { id: "breakfast", label: "Breakfast" },
      { id: "lunch-sandwiches", label: "Lunch Sandwiches" },
      { id: "bakery", label: "Bakery" },
      { id: "taste-of-italy", label: "Taste of Italy" },
    ],
  },
];
