import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const activeClass = ({ isActive }) => {
    return "nav-item__link" + (isActive ? " active-page" : "");
  };

  return (
    <div className="navbar">
      <Container fluid>
        <a className="logo" href="./home">
          Fantasy Restourant
        </a>
        <ul className="nav">
          <li className="nav-item">
            <NavLink end className={activeClass} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={activeClass} to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-item__link" href="./booking">
              Booking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-item__link" href="./location">
              Location
            </a>
          </li>
        </ul>
        <div className="cart">
          Мой меню
          <span className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
          <span className="cart-counter">0</span>
        </div>
        {/* <button className="btn-default btn-sm">Оставить отзыв</button> */}
      </Container>
    </div>
  );
}

export default Navbar;
