import { allProducts } from "../data/products.data";

import  { getImage } from "../utils/products-images.utils";

import type { CategoryId } from "../types/products.types"

import { Link } from "react-router-dom";

export const Products = ({ category }: { category: CategoryId }) => {
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/our-menu/${category}/${product.id}`}
          className="product-card"
        >
          {product.name}
          <img src={getImage(product.image)} alt={product.name} />
        </Link>
      ))}
    </div>
  );
};
