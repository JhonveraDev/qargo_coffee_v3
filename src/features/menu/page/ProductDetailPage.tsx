import { useParams, Navigate, useNavigate } from "react-router-dom";

import { getImage } from "../utils/products-images.utils";

import DietaryIcons from "../../../assets/images/menu/general-info/dietary-icons-blue.svg";

import arrowLeft from "../../../assets/images/franchise/arrow.svg";

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

      <div className="product-detail__header">
        <button
          className="product-detail__back-button"
          onClick={() => navigate(-1)}
        >
          <img
            src={arrowLeft}
            alt=""
            aria-hidden="true"
          />
          Our Menu
        </button>
      </div>

      <div className="product-detail__content">

        <div className="product-detail__image-section">
          <div className="product-detail__image-container">
            <img
              className="product-detail__main-image"
              src={getImage("main-images", product.mainImage)}
              alt={product.name}
            />
          </div>

          <div className="product-detail__info-container">
            <img
              className="product-detail__dietary-icons"
              src={DietaryIcons}
              alt="Dietary icons"
            />

            <p className="product-detail__allergen-text">
              We cannot guarantee that our products are allergen-free due to the use of shared equipment for storage, preparation, and service.  Customers with allergies can find ingredient information for our packaged products on the labels.
              Subject to availability
            </p>
          </div>
        </div>

        <div className="product-detail__info-section">
          <h2 className="product-detail__title">
            {product.name}
          </h2>

          <button className="product-detail__order-button">
            Order Here
          </button>

          <p className="product-detail__available-text">
            Available in:
          </p>

          <span className="product-detail__size">
            ( {product.sizePiker} )
          </span>

          <img
            className="product-detail__nutrition-image"
            src={nutritionalTable}
            alt="Nutritional information"
          />
        </div>

      </div>
    </div>
  );
};

