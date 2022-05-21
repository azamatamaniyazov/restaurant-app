import { useEffect, useState, useRef, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTotalPrice, setOrderProducts } from "../../actions";
import BasketItem from "./BasketItem";
import "./BasketPage.css";

function BasketPage() {
  const { basketProducts, totalPrice } = useSelector((state) => state);
  const [musicPrice, setMusicPrice] = useState(10000);

  const dispatch = useDispatch();
  const numPeopleRef = useRef();

  useEffect(() => {
    dispatch(setOrderProducts(productsArray));
  }, []);

  const productsArray = basketProducts.reduce((prev, curr) => {
    return [
      ...prev,
      {
        product_id: curr.id,
        product_name: curr.product_name,
        count: localStorage.getItem(`key_${curr.id}`)
          ? JSON.parse(localStorage.getItem(`key_${curr.id}`)).count
          : 1,
        price: localStorage.getItem(`key_${curr.id}`)
          ? JSON.parse(localStorage.getItem(`key_${curr.id}`)).amountPrice
          : curr.price,
      },
    ];
  }, []);

  const amountHandler = () => {
    const result = numPeopleRef.current.value * 10000;
    setMusicPrice(result);
  };

  const basketItems = useMemo(() => {
    return basketProducts.map((item, index) => {
      return <BasketItem key={item.id} {...item} index={index} />;
    });
  }, [basketProducts.length]);

  return (
    <div className="my-menu">
      <Container>
        <Row className="justify-content-center">
          <h3 className="title text-center mb-4">
            Мой <span>меню</span>
          </h3>
          <Col lg="10" className="bg-white p-4 rounded">
            <h4 className="mb-4">Список продуктов</h4>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th className="col-5 text-center" scope="col">
                      Продукты
                    </th>
                    <th className="col-2 text-center" scope="col">
                      Цена
                    </th>
                    <th className="col-1 text-center" scope="col">
                      Количество
                    </th>
                    <th className="col-2 text-center" scope="col">
                      Сумма
                    </th>
                    <th className="col-1 text-center" scope="col">
                      Удалить
                    </th>
                  </tr>
                </thead>
                {basketItems}
              </table>
            </div>
          </Col>
          <Col
            lg="10"
            className="d-flex align-items-center justify-content-between bg-white mt-4 p-4 rounded"
          >
            <h4>Плата за музыку</h4>
            <div className="d-flex">
              <div>
                <label className="form-label">Цена</label>
                <input
                  className="form-control"
                  type="number"
                  value={10000}
                  readOnly
                />
              </div>
              <div>
                <label className="form-label">Количество людей</label>
                <input
                  className="form-control"
                  type="number"
                  ref={numPeopleRef}
                  onChange={amountHandler}
                  defaultValue={1}
                  min={1}
                />
              </div>
              <div>
                <label className="form-label">Сумма</label>
                <input
                  className="form-control"
                  type="number"
                  value={musicPrice}
                  readOnly
                />
              </div>
            </div>
          </Col>
          <Col lg="10" className="bg-white mt-4 p-4 rounded">
            <h4>Чек</h4>
            <div className="d-flex justify-content-around mt-4">
              <div>
                <label className="mx-3">За обслуживание (15%)</label>
                <input
                  className="text-center p-1 border rounded"
                  type="number"
                  value={0}
                  readOnly
                />
              </div>
              <div>
                <label className="mx-3">Общий счет</label>
                <input
                  className="text-center p-1 border rounded"
                  type="number"
                  value={totalPrice}
                  readOnly
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasketPage;
