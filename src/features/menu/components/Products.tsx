import { allProducts } from "../data/products.data";
import type { CategoryId } from "../types/products.types"

export const Products = ({ category }: { category: CategoryId }) => {
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};
