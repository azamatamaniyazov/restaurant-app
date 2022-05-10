import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "react-bootstrap";
import useServices from "../../services/Services";
import setContent from "../../utils/setContent";
import CategoriesBlock from "./categoriesBlock/CategoriesBlock";
import "./CategoriesPage.css";
import ProductsBlock from "./productsBlock/ProductsBlock";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Recently added");
  const [selectedId, setSelectedId] = useState();
  const [activeId, setActiveId] = useState();

  const { getCategories, status, setStatus } = useServices();

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .then(() => setStatus("confirmed"));
  }, []);

  const getSelectedCategory = (name, id) => {
    setSelectedCategory(name);
    setSelectedId(id);
  };

  const getActiveId = (id) => {
    setActiveId(id);
  };

  const Blocks = () => {
    return (
      <>
        <Col lg="3">
          <CategoriesBlock
            getSelectedCategory={getSelectedCategory}
            categories={categories}
            activeId={activeId}
          />
        </Col>
        <Col lg="9">
          <ProductsBlock
            getActiveId={getActiveId}
            selectedCategory={selectedCategory}
            selectedId={selectedId}
          />
        </Col>
      </>
    );
  };

  return (
    <div className="categories-page">
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Menu</BreadcrumbItem>
        <BreadcrumbItem active>{selectedCategory}</BreadcrumbItem>
      </Breadcrumb>
      <Row className="justify-content-between">
        {setContent(status, Blocks)}
      </Row>
    </div>
  );
}

export default CategoriesPage;
