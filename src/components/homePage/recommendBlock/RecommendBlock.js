import { Container, Row } from "react-bootstrap";
import ProductsSlider from "./productsSlider/ProductsSlider";
import "./RecommendBlock.css";

function RecommendBlock() {
  return (
    <div className="recommend-block">
      <Container>
        <Row>
          <div className="heading mb-3">
            <h3>Рекомендуем</h3>
            <span className="subtitle">для вас</span>
          </div>
          <ProductsSlider />
        </Row>
      </Container>
    </div>
  );
}

export default RecommendBlock;
