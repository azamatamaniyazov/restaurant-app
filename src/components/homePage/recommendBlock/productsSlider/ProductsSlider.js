import { Carousel, Col, Row } from "react-bootstrap";
import "./ProductsSlider.css";

function ProductsSlider() {
  return (
    <Carousel nextIcon="" prevIcon="">
      <Carousel.Item>
        <Row>
          <Col lg="4" xs="6">
            <a href="#" className="popular-products__item-link">
              <img
                className="fill-available"
                src="https://preview.colorlib.com/theme/meal2/images/ximg_1.jpg.pagespeed.ic.VpbnsnaQH0.webp"
                alt=""
              />
            </a>
            <div className="popular-products__item-info">
              <h4 className="title">Italian Sauce Mushroom</h4>
              <span className="price">$19</span>
            </div>
          </Col>
          <Col lg="4" xs="6">
            <a href="#" className="popular-products__item-link">
              <img
                className="fill-available"
                src="https://preview.colorlib.com/theme/meal2/images/ximg_1.jpg.pagespeed.ic.VpbnsnaQH0.webp"
                alt=""
              />
            </a>
            <div className="popular-products__item-info">
              <h4 className="title">Italian Sauce Mushroom</h4>
              <span className="price">$19</span>
            </div>
          </Col>
          <Col lg="4" xs="6">
            <a href="#" className="popular-products__item-link">
              <img
                className="fill-available"
                src="https://preview.colorlib.com/theme/meal2/images/ximg_1.jpg.pagespeed.ic.VpbnsnaQH0.webp"
                alt=""
              />
            </a>
            <div className="popular-products__item-info">
              <h4 className="title">Italian Sauce Mushroom</h4>
              <span className="price">$19</span>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ProductsSlider;
