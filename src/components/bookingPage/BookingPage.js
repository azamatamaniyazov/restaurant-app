import { Row, Col, Container } from "react-bootstrap";
import "./BookingPage.css";

function BookinPage() {
  return (
    <div className="booking-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <h3>Booking</h3>
            <form className="booking-form row g-3">
              <div className="col-md-5">
                <label htmlFor="inputName" className="form-label mx-3">
                  Имя
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="inputName"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="phone" className="form-label mx-3">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
              <div className="d-flex align-items-center row mt-4">
                <div className="col-md-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={0}
                  >
                    <option>Выберите этаж</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={0}
                  >
                    <option>Выберите место</option>
                    <option value="1">Кабина</option>
                    <option value="2">Общий зал</option>
                  </select>
                </div>
                <div className="d-flex col-md-4">
                  <label htmlFor="quantity" className="d-block form-label mx-3">
                    Количество людей
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    defaultValue={1}
                    min={1}
                    max={30}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <label htmlFor="date">Выберите дату</label>
                  <input type="date" name="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="time">Время прихода</label>
                  <input type="time" name="time" className="form-control" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <label htmlFor="price">Обшая сумма меню</label>
                  <input
                    value={500000}
                    type="text"
                    name="price"
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="prepayment">Предоплата (30%)</label>
                  <input
                    value={500000}
                    type="text"
                    name="prepayment"
                    className="form-control"
                    readOnly
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end col-12">
                <button type="submit" className="btn-default rounded">
                  Забронировать
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookinPage;
