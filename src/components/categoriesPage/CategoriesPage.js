import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../services/Services";
import CategoriesBlock from "./categoriesBlock/CategoriesBlock";
import "./CategoriesPage.css";
import ProductsBlock from "./productsBlock/ProductsBlock";

function CategoriesPage({ getBasketItemId }) {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [activeId, setActiveId] = useState();

  const { getCategories, status, setStatus } = useServices();

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .then(() => setStatus("confirmed"));
  }, []);

  const getSelectedCategory = (id, name) => {
    setSelectedId(id);
    setSelectedCategory(name);
  };

  const getActiveId = (id) => {
    setActiveId(id);
  };

  return (
    <div className="categories-page">
      <Container>
        <Row className="justify-content-between">
          <CategoriesBlock
            categories={categories}
            getSelectedCategory={getSelectedCategory}
            activeId={activeId}
          />
          <ProductsBlock
            selectedId={selectedId}
            selectedCategory={selectedCategory}
            getActiveId={getActiveId}
            getBasketItemId={getBasketItemId}
          />
        </Row>
      </Container>
    </div>
  );
}

export default CategoriesPage;
