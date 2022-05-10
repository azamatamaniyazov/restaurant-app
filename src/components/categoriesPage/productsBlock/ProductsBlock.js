import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import useServices from "../../../services/Services";
import ProductItem from "./productItem/ProductItem";
import "./ProductsBlock.css";

function ProductsBlock({ getActiveId, selectedCategory, selectedId }) {
  const [products, setProducts] = useState();
  const [transition, setTransition] = useState(false);
  const { getProducts, getRecentProducts, status, setStatus } = useServices();

  useEffect(() => {
    selectedId
      ? getProducts(selectedId)
          .then((data) => setProducts(data))
          .then(() => {
            setStatus("confirmed");
            setTransition(true);
          })
      : getRecentProducts()
          .then((data) => setProducts(data))
          .then(() => {
            setStatus("confirmed");
            setTransition(true);
          });
  }, []);

  const productsItems = products
    ? products.map((item) => {
        return (
          <ProductItem key={item.id} {...item} getActiveId={getActiveId} />
        );
      })
    : null;

  return (
    <div className="products-block">
      <h3 className="mb-4 text-center">{selectedCategory}</h3>
      <Row>{productsItems}</Row>
    </div>
  );
}

export default ProductsBlock;
