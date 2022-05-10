import Navbar from "./navbar/Navbar";
import "./AppHeader.css";
import { Col, Container, Row } from "react-bootstrap";

function AppHeader() {
  return (
    <div className="app-header">
      <Navbar />
      <div className="intro">
        <Container>
          <Row>
            <Col lg="6">
              <span>Enjoy Your Healthy Delicious Meal</span>
              <h1 className="intro-title">Treat Yourself</h1>
              <p className="intro-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat neque itaque maiores fugit earum, natus praesentium
                voluptatibus nemo, quos soluta? Eligendi perspiciatis architecto
                omnis voluptas suscipit. Debitis, quidem.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AppHeader;
