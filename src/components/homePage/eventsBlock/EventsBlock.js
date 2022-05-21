import { useEffect } from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  eventsFetching,
  eventsFetched,
  eventsFetchingError,
} from "../../../actions";
import useServices from "../../../services/Services";
import "./EventsBlock.css";

function EventsBlock() {
  const { events } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getEvents } = useServices();

  useEffect(() => {
    dispatch(eventsFetching());
    getEvents()
      .then((data) => dispatch(eventsFetched(data)))
      .catch(() => dispatch(eventsFetchingError()));
  }, []);

  const renderEvents = (events) => {
    return events.map((item) => {
      return (
        <CarouselItem key={item.id}>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                className="event-img fill-available"
                src={item.images[0]}
                alt="events-1"
              />
            </Col>
            <Col lg="5">
              <div className="event-info">
                {/* <span className="price">$200</span> */}
                <h3 className="title mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Col>
          </Row>
        </CarouselItem>
      );
    });
  };

  const eventsCarousel = renderEvents(events);

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
          {/* <CarouselItem>
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
          </CarouselItem> */}
          {eventsCarousel}
        </Carousel>
      </Container>
    </div>
  );
}

export default EventsBlock;
