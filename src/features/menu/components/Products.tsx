import { allProducts } from "../data/products.data";

import { getImage } from "../utils/products-images.utils";

import type { CategoryId } from "../types/products.types"

import { Link } from "react-router-dom";

export const Products = ({ category }: { category: CategoryId }) => {
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="our-menu__products">
      <h2> </h2>
      <div className="our-menu__grid">
        {filteredProducts.map(({ id, name, thumbnail }) => (
          <Link
            key={id}
            to={`/our-menu/${category}/${id}`}
            className="our-menu__card"
          >
            <img
              className="our-menu__card-image"
              src={getImage("thumbnail-images", thumbnail)}
              alt={name}
            />
            <span className="our-menu__card-title">{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
