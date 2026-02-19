import { useParams, Navigate, useNavigate } from "react-router-dom";

import { getImage } from "../utils/products-images.utils";

import DietaryIcons from "../../../assets/images/menu/general-info/dietary-icons-blue.png";

import nutritionalTable from "../../../assets/images/menu/main-images/dummy-data-01.png";

import { allProducts } from "../data/products.data";

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
      <div>
        <button onClick={() => navigate(-1)}>Our Menu</button>
      </div>
      <div>
        <div>
          <img
            src={getImage("main-images", product.mainImage)}
            alt={product.name}
          />
          <img src={DietaryIcons} alt="" />
          <p>We cannot guarantee that our products are allergen-free due to the use of shared equipment for storage, preparation, and service.  Customers with allergies can find ingredient information for our packaged products on the labels.</p>
        </div>
        <div>
          <h2>{product.name}</h2>
          <button>Order Here</button>
          <p>Available in:</p>
          <div>
            <span>{product.sizePiker}</span>
          </div>
          <img src={ nutritionalTable } alt="" />
        </div>
      </div>
    </div>
  );
};

