import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./categoriesPage/CategoriesPage";
import Navbar from "./homePage/appHeader/navbar/Navbar";
import HomePage from "./homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <div className="sections">
        <Routes>
          <Route path="menu" element={<Navbar />} />
        </Routes>
        <Container>
          <div className="section-blocks">
            <Routes>
              <Route path="menu" element={<CategoriesPage />} />
            </Routes>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
