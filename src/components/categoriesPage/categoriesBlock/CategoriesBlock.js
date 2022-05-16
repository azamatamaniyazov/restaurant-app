import { Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoriesFetching,
  categoriesFetched,
  categoriesFetchingError,
  changeActiveCategoryId,
} from "../../../actions";
import useServices from "../../../services/Services";
import "./CategoriesBlock.css";

function CategoriesBlock() {
  const { categories, activeCategoryId } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getCategories } = useServices();

  useEffect(() => {
    dispatch(categoriesFetching());
    getCategories()
      .then((data) => dispatch(categoriesFetched(data)))
      .catch(() => dispatch(categoriesFetchingError));
  }, []);

  const listItems = categories.map((item) => {
    const activeClass = item.id === activeCategoryId ? "active-item" : "";
    return (
      <li
        key={item.id}
        className={`list-item ${activeClass}`}
        onClick={() => dispatch(changeActiveCategoryId(item.id))}
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
        <ul className="categories-list">{listItems}</ul>
      </div>
    </Col>
  );
}

export default CategoriesBlock;
