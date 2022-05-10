import { useEffect } from "react";
import { Col } from "react-bootstrap";

function ProductItem({
  getActiveId,
  id,
  category_id,
  product_name,
  description,
  price,
  images,
}) {
  useEffect(() => {
    getActiveId(category_id);
  }, [category_id]);

  return (
    <Col lg="4">
      <div className="products-item scale">
        <img className="fill-available" src={images[0]} alt="product" />
        <div className="item-details">
          <h4 className="product-title mb-2">{product_name}</h4>
          <p className="products-desc">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              Price: <span className="price">{price}</span>
            </span>
            <button>
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
