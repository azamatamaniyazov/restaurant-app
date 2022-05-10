import { Col, Container, Row } from "react-bootstrap";
import "./CustomersBlock.css";
import CustomerGalleries from "./gallery/CustomerGalleries";
import CustomerReviews from "./reviews/CustomerReviews";

function CustomersBlock() {
  return (
    <div className="customers-block overlay">
      <Container>
        <Row className="justify-content-between">
          <Col className="z-index" lg="5">
            <CustomerReviews />
          </Col>
          <Col className="z-index mt-4 mt-lg-0" lg="6">
            <CustomerGalleries />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomersBlock;
