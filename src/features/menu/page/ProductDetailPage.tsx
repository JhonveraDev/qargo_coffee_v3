import { Navigate, useNavigate } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail";

import { getImage } from "../utils/products-images.utils";

import DietaryIcons from "../../../assets/images/menu/general-info/dietary-icons-blue.svg";
import arrowLeft from "../../../assets/images/franchise/arrow.svg";

import { NutritionalFacts } from "../index";

export const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { categoryId, product } = useProductDetail();

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
            aria-label="Go back to menu"
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
              We cannot guarantee that our products are allergen-free due to the use of shared equipment for storage, preparation, and service.
              Customers with allergies can find ingredient information for our packaged products on the labels.
              Subject to availability.
            </p>
          </div>
        </div>

        <div className="product-detail__info-section">
          <h2 className="product-detail__title">
            {product.name}
          </h2>

          <a
            className="product-detail__order-button"
            href={`https://${product.productUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Here
          </a>

          <p className="product-detail__available-text">
            Available in:
          </p>

          <span className="product-detail__size">
            ( {product.sizePiker} )
          </span>

          <h2 className="product-detail__nutrition-title">Nutritional Facts</h2>

          <div className="product-detail__nutrition-section">
            <NutritionalFacts data={product.nutritionalFacts} />
          </div>
        </div>
      </div>
    </div>
  );
};