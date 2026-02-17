import { useParams, Navigate, useNavigate } from "react-router-dom";

import { allProducts } from "../data/products.data";

import { getImage } from "../utils/products-images.utils";

export const ProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const categoryData = allProducts.find(
    (item) => item.category === categoryId
  );

  const product = categoryData?.products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return <Navigate to={`/our-menu/${categoryId}`} replace />;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img
        src={getImage("main-images", product.mainImage)}
        alt={product.name}
      />
      <p>{product.name}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

