import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./categoriesPage/CategoriesPage";
import Navbar from "./navbar/Navbar";
import HomePage from "./homePage/HomePage";
import BasketPage from "./basketPage/BasketPage";
import { useEffect, useState } from "react";
import useServices from "../services/Services";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<CategoriesPage />} />
          <Route path="my-menu" element={<BasketPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
