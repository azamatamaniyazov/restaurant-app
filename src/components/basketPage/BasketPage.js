import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";
import "./BasketPage.css";

function BasketPage() {
  const { basketProducts } = useSelector((state) => state);

  const basketItems = basketProducts.map((item, index) => {
    return <BasketItem key={item.id} {...item} index={index} />;
  });

  return (
    <div className="my-menu">
      <Container>
        <Row className="justify-content-center">
          <h3 className="title text-center mb-4">
            Мой <span>меню</span>{" "}
          </h3>
          <Col lg="10" className="bg-white p-3 rounded">
            <table className="table">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasketPage;
