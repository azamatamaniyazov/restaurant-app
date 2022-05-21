import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./categoriesPage/CategoriesPage";
import Navbar from "./navbar/Navbar";
import HomePage from "./homePage/HomePage";
import BasketPage from "./basketPage/BasketPage";
import BookingPage from "./bookingPage/BookingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<CategoriesPage />} />
          <Route path="my-menu" element={<BasketPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
