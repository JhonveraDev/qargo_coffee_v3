import { useParams, Navigate, useNavigate } from "react-router-dom";
import { allProducts } from "../data/products.data";
import { getImage } from "../utils/products-images.utils";

export const ProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find(
    (p) => p.id === productId && p.category === categoryId
  );

  if (!product) return <Navigate to={`/our-menu/${categoryId}`} replace />;

  return (
    <div className="product-detail-page">
      <h2>{product.name}</h2>
      <img src={getImage(product.image)} alt={product.name} />
      <p>{product.name}</p>
      <p>Precio: ${product.id}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
