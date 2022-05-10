import { Col, Row } from "react-bootstrap";

import "./CustomerGalleries.css";

function CustomerGalleries() {
  return (
    <div className="customer-galleries">
      <h2 className="title mb-5">
        Фото <span>Галерея</span>
      </h2>
      <Row>
        <Col className="mb-4" xs="6">
          <img
            className="fill-available rounded-3"
            src="https://images.squarespace-cdn.com/content/v1/5ceea3e64221bb00014b9d6e/1565381496875-35RBWD9ZWFHCRE0D4HCJ/holidays.jpg"
            alt=""
          />
        </Col>
        <Col className="mb-4" xs="6">
          <img
            className="fill-available rounded-3"
            src="https://images.squarespace-cdn.com/content/v1/5ceea3e64221bb00014b9d6e/1565381496875-35RBWD9ZWFHCRE0D4HCJ/holidays.jpg"
            alt=""
          />
        </Col>
        <Col className="mb-4" xs="6">
          <img
            className="fill-available rounded-3"
            src="https://images.squarespace-cdn.com/content/v1/5ceea3e64221bb00014b9d6e/1565381496875-35RBWD9ZWFHCRE0D4HCJ/holidays.jpg"
            alt=""
          />
        </Col>
        <Col className="mb-4" xs="6">
          <img
            className="fill-available rounded-3"
            src="https://images.squarespace-cdn.com/content/v1/5ceea3e64221bb00014b9d6e/1565381496875-35RBWD9ZWFHCRE0D4HCJ/holidays.jpg"
            alt=""
          />
        </Col>
      </Row>
      <button className="btn-default rounded-2">Больше фотки</button>
    </div>
  );
}

export default CustomerGalleries;
