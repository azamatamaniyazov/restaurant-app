import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import useServices from "../../../services/Services";
import ProductItem from "./productItem/ProductItem";
import "./ProductsBlock.css";

function ProductsBlock({
  selectedId,
  selectedCategory,
  getActiveId,
  getBasketItemId,
}) {
  const [products, setProducts] = useState({});
  const { getProducts, getRecentProducts, status, setStatus } = useServices();

  useEffect(() => {
    selectedId
      ? getProducts(selectedId)
          .then((data) => {
            setProducts(data);
            getActiveId(data.category_id);
          })
          .then(() => {
            setStatus("confirmed");
          })
      : getRecentProducts()
          .then((data) => setProducts(data))
          .then(() => {
            setStatus("confirmed");
          });
  }, [selectedId]);

  const productsItems = products.products
    ? products.products.map((item) => {
        return (
          <ProductItem
            key={item.id}
            {...item}
            getBasketItemId={getBasketItemId}
          />
        );
      })
    : null;
  return (
    <Col lg="9">
      <div className="products-block">
        <h3 className="mb-4 text-center">
          {selectedId && !products.category_name
            ? selectedCategory
            : products.category_name}
        </h3>
        <Row>{productsItems}</Row>
      </div>
    </Col>
  );
}

export default ProductsBlock;
