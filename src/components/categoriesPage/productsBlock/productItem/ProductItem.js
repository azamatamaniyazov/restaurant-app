import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  basketProductFetched,
  basketProductFetching,
  basketProductFetchingError,
} from "../../../../actions";
import useServices from "../../../../services/Services";

function ProductItem({ id, product_name, description, price, images }) {
  const dispatch = useDispatch();
  const { getProduct } = useServices();

  const { basketProducts } = useSelector((state) => state);
  const [basketProductId, setBasketProductId] = useState();

  useEffect(() => {
    if (basketProductId) {
      addToBasket(basketProductId);
    }
  }, [basketProductId]);

  const addToBasket = (id) => {
    dispatch(basketProductFetching());
    getProduct(id)
      .then((data) => {
        const updatedBasketProducts = [...basketProducts, data];
        dispatch(basketProductFetched(updatedBasketProducts));
        localStorage.setItem(
          "basketProducts",
          JSON.stringify(updatedBasketProducts)
        );
      })
      .catch(() => basketProductFetchingError());
  };

  const btnStatus = basketProducts.some((item) => item.id === id);

  return (
    <Col lg="4">
      <div className="products-item scale">
        <img
          className="fill-available"
          src={
            "https://static.1000.menu/img/content-v2/eb/79/19516/salat-cezar-klassicheskii-s-kuricei_1611309331_16_max.jpg"
          }
          alt="product"
        />
        <div className="item-details">
          <h4 className="product-title mb-2">{product_name}</h4>
          <p className="products-desc">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              Price: <span className="price">{price}</span>
            </span>
            <button
              onClick={() => {
                setBasketProductId(id);
              }}
              className={btnStatus ? "active-class" : ""}
              disabled={btnStatus}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-bag-plus-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProductItem;
