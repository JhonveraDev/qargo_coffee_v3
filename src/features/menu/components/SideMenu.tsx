import { menuCategories } from "../data/products.data";
import type { CategoryId } from "../types/products.types";

interface SideMenuProps {
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void; 
}

export const SideMenu = ({ selectedCategory, onSelectCategory }: SideMenuProps) => {
  return (
    <div className="side-menu">
      {menuCategories.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectCategory(item.id)} 
          className={selectedCategory === item.id ? "active" : ""}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};