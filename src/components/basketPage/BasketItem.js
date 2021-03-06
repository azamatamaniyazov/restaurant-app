import { useState, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTotalPrice,
  deleteBasketProduct,
  setOrderProducts,
} from "../../actions";

const BasketItem = ({ id, category_name, product_name, price, index }) => {
  const { basketProducts, orderProducts } = useSelector((state) => state);
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const inputRef = useRef(1);

  const totalPrice = orderProducts.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  useEffect(() => {
    amountHandler();
    dispatch(changeTotalPrice(totalPrice));
    console.log("render");
  }, [totalPrice]);

  const amountHandler = () => {
    const newArray = orderProducts.filter((item) => item.product_id !== id);
    const newObj = {
      product_id: id,
      product_name,
      count: inputRef.current.value,
      price: inputRef.current.value * price,
    };

    newArray.push(newObj);
    dispatch(setOrderProducts(newArray));
    localStorage.setItem(
      `key_${id}`,
      JSON.stringify({
        count: inputRef.current.value,
        amountPrice: inputRef.current.value * price,
      })
    );
  };

  const getLocalStorage = (id) => {
    return JSON.parse(localStorage.getItem(`key_${id}`));
  };

  const removeBasketProduct = (id) => {
    const updatedBasketProducts = basketProducts.filter(
      (item) => item.id !== id
    );
    dispatch(deleteBasketProduct(updatedBasketProducts));
    localStorage.setItem(
      "basketProducts",
      JSON.stringify(updatedBasketProducts)
    );

    const updatedOrderProducts = orderProducts.filter(
      (item) => item.product_id !== id
    );
    dispatch(setOrderProducts(updatedOrderProducts));
    localStorage.removeItem(`key_${id}`);
  };

  return (
    <tbody>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          {product_name} <small>({category_name})</small>
        </td>
        <td className="text-center">{price}</td>
        <td>
          <input
            className="form-control text-center p-1"
            type="number"
            defaultValue={getLocalStorage(id) ? +getLocalStorage(id).count : 1}
            min={1}
            onChange={amountHandler}
            ref={inputRef}
          />
        </td>
        <td className="text-center">
          <input
            className="form-control text-center border-0 bg-transparent"
            type="text"
            value={
              getLocalStorage(id)
                ? +getLocalStorage(id).amountPrice
                : +inputRef.current.value * price
            }
            readOnly
          />
        </td>
        <td className="text-center">
          <button
            className="delete border-0 bg-transparent"
            type="button"
            onClick={() => {
              removeBasketProduct(id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default BasketItem;
