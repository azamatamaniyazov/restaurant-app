import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./categoriesPage/CategoriesPage";
import Navbar from "./navbar/Navbar";
import HomePage from "./homePage/HomePage";
import BasketPage from "./basketPage/BasketPage";
import { useEffect, useState } from "react";
import useServices from "../services/Services";

function App() {
  const [basketItemId, setBasketItemId] = useState();
  const [basketProducts, setBasketProducts] = useState([]);

  const { getProduct, status, setStatus } = useServices();

  useEffect(() => {
    if (basketItemId) {
      getProduct(basketItemId)
        .then((data) => setBasketProducts([...basketProducts, data]))
        .then(() => setStatus("confirmed"));
    }
  }, [basketItemId]);

  const getBasketItemId = (id) => {
    setBasketItemId(id);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route
            path="menu"
            element={<CategoriesPage getBasketItemId={getBasketItemId} />}
          />
          <Route
            path="my-menu"
            element={<BasketPage basketProducts={basketProducts} />}
          />

          {/* <div className="sections">
            <div className="section-blocks"></div>
          </div> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
