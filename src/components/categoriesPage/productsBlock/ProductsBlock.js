import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  productsFetched,
  productsFetching,
  productsFetchingError,
} from "../../../actions";
import useServices from "../../../services/Services";
import ProductItem from "./productItem/ProductItem";
import "./ProductsBlock.css";

function ProductsBlock() {
  const { products, productsLoadingStatus, activeCategoryId } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { getProducts, getRecentProducts } = useServices();

  useEffect(() => {
    productsLoader();
  }, [activeCategoryId]);

  const productsLoader = () => {
    dispatch(productsFetching());
    activeCategoryId
      ? getProducts(activeCategoryId)
          .then((data) => dispatch(productsFetched(data)))
          .catch(() => dispatch(productsFetchingError()))
      : getRecentProducts()
          .then((data) => dispatch(productsFetched(data)))
          .catch(() => dispatch(productsFetchingError()));
  };

  const renderProductItems = (products) => {
    if (products.length === 0) {
      return (
        <p className="text-center my-4">В настоящее время это меню пусто</p>
      );
    }

    return products.map((item) => {
      return (
        <CSSTransition
          in={true}
          key={item.id}
          timeout={500}
          classNames="my-node"
        >
          <ProductItem {...item} />
        </CSSTransition>
      );
    });
  };

  const productsItems = renderProductItems(products);
  return (
    <Col lg="9">
      <div className="products-block">
        <TransitionGroup>
          <Row>
            {productsLoadingStatus === "loading" ? "Loading" : productsItems}
          </Row>
        </TransitionGroup>
      </div>
    </Col>
  );
}

export default ProductsBlock;
