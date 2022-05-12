import { Col } from "react-bootstrap";
import "./CategoriesBlock.css";

function CategoriesBlock({ categories, getSelectedCategory, activeId }) {
  const listItems = categories.map((item) => {
    const activeClass = activeId === item.id ? " active-item" : "";
    return (
      <li
        key={item.id}
        className={`list-item ${activeClass}`}
        onClick={() => getSelectedCategory(item.id, item.category_name)}
      >
        {item.category_name}
      </li>
    );
  });

  return (
    <Col lg="3">
      <div className="categories-block">
        <div className="mb-4">
          <span className="subtitle">выберите блюд</span>
          <h3 className="title">
            Наше <span>Меню</span>
          </h3>
        </div>
        <ul className="categories-list">
          {listItems}
          {/* <li className="list-item">Первое блюдо</li>
        <li className="list-item active-item">Первое блюдо</li>
        <li className="list-item">Первое блюдо</li> */}
        </ul>
      </div>
    </Col>
  );
}

export default CategoriesBlock;
