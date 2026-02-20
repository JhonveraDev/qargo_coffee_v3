import { useParams } from "react-router-dom";
import { allProducts } from "../data/products.data";

export const useProductDetail = () => {
  const { categoryId, productId } = useParams();

  const categoryData = allProducts.find(
    (item) => item.category === categoryId
  );

  const product = categoryData?.products.find(
    (item) => item.id === productId
  );

  return {
    categoryId,
    product,
  };
};