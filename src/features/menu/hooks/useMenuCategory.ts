import { useParams } from "react-router-dom";
import { menuCategories } from "../data/sideMenu.data";

export const useMenuCategory = () => {
  const { categoryId } = useParams();

  const validCategory = menuCategories
    .flatMap((group) => group.items)
    .find((item) => item.id === categoryId);

  return {
    categoryId,
    validCategory,
  };
};