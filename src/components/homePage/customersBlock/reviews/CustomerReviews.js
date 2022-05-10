import { Carousel, CarouselItem } from "react-bootstrap";
import "./CustomerReviews.css";

function CustomerReviews() {
  return (
    <div className="customer-reviews">
      <h2 className="title mb-5">
        Наши <span>Клиенты</span>
      </h2>
      <Carousel fade nextIcon prevIcon>
        <CarouselItem>
          <div className="cutomer-info">
            <img
              className="customer-img"
              src="https://www.crucial.com.au/wp-content/uploads/2014/07/example-person.png"
              alt=""
            />
            <div className="customer-name">
              <h5>John Doe</h5>
              <span>CEO, Founder</span>
            </div>
          </div>
          <div className="quote">“</div>
          <p className="customer-feedback">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            nostrum illo. Dicta eos nulla dolorum id odit ab et officiis quasi?
            Placeat, veniam aperiam commodi repudiandae possimus aut cumque
            delectus!"
          </p>
        </CarouselItem>
        <CarouselItem>
          <div className="cutomer-info">
            <img
              className="customer-img"
              src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
              alt=""
            />
            <div className="customer-name">
              <h5>Zoe Soldana</h5>
              <span>Designer</span>
            </div>
          </div>
          <div className="quote">“</div>
          <p className="customer-feedback">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default CustomerReviews;
