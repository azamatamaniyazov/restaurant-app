import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CategoriesBlock from "./categoriesBlock/CategoriesBlock";
import "./CategoriesPage.css";
import ProductsBlock from "./productsBlock/ProductsBlock";

function CategoriesPage() {
  return (
    <div className="categories-page">
      <Container>
        <Row className="justify-content-between">
          <CategoriesBlock />
          <ProductsBlock />
        </Row>
      </Container>
    </div>
  );
}

export default CategoriesPage;
