import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import "./EventsBlock.css";

function EventsBlock() {
  return (
    <div className="events-block">
      <Container>
        <div className="block-header mb-5">
          <Row className="justify-content-center">
            <Col className="text-center px-3" lg="7">
              <span className="subtitle">events</span>
              <h2 className="title mb-2">
                Enjoy <span>Our Events</span>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </Col>
          </Row>
        </div>
        <Carousel nextIcon prevIcon>
          <CarouselItem>
            <Row className="justify-content-between">
              <Col lg="6">
                <img
                  className="event-img fill-available"
                  src="https://bosphoruscruise.com/wp-content/uploads/2015/02/New-Years.jpg"
                  alt="events-1"
                />
              </Col>
              <Col lg="5">
                <div className="event-info">
                  <span className="price">$200</span>
                  <h3 className="title mb-4">Новый год</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odio fugiat optio harum deleniti voluptates. Fuga dolor quo
                    quis sapiente reiciendis soluta vitae, ipsa deserunt
                    repellendus id autem sint amet ea?
                  </p>
                </div>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row className="justify-content-between">
              <Col lg="6">
                <img
                  className="event-img fill-available"
                  src="https://hornsfood.com/wp-content/uploads/2020/05/Birthday-Celebration-at-a-Restaurant.jpg"
                  alt="events-1"
                />
              </Col>
              <Col lg="5">
                <div className="event-info">
                  <span className="price">$200</span>
                  <h3 className="title mb-4">День рождения</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odio fugiat optio harum deleniti voluptates. Fuga dolor quo
                    quis sapiente reiciendis soluta vitae, ipsa deserunt
                    repellendus id autem sint amet ea?
                  </p>
                </div>
              </Col>
            </Row>
          </CarouselItem>
        </Carousel>
      </Container>
    </div>
  );
}

export default EventsBlock;
