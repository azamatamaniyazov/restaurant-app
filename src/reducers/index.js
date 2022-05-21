const localState = localStorage.getItem("basketProducts");

const initialState = {
  categories: [],
  categoriesLoadingStatus: "idle",
  activeCategoryId: 0,
  products: [],
  productsLoadingStatus: "idle",
  basketProducts: localState ? JSON.parse(localState) : [],
  basketProductsLoadingStatus: "idle",
  orderProducts: [],
  totalPrice: 0,
  events: [],
  eventsLoadingStatus: "idle",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_FETCHING":
      return {
        ...state,
        categoriesLoadingStatus: "loading",
      };
    case "CATEGORIES_FETCHED":
      return {
        ...state,
        categories: action.payload,
        categoriesLoadingStatus: "idle",
      };
    case "CATEGORIES_FETCHING_ERROR":
      return {
        ...state,
        categoriesLoadingStatus: "error",
      };
    case "CHANGE_ACTIVE_CATEGORY_ID":
      return {
        ...state,
        activeCategoryId: action.payload,
      };
    case "PRODUCTS_FETCHING":
      return {
        ...state,
        productsLoadingStatus: "loading",
      };
    case "PRODUCTS_FETCHED":
      return {
        ...state,
        products: action.payload,
        productsLoadingStatus: "idle",
      };
    case "PRODUCTS_FETCHING_ERROR":
      return {
        ...state,
        productsLoadingStatus: "error",
      };
    case "BASKET_PRODUCT_FETCHING":
      return {
        ...state,
        basketProductsLoadingStatus: "loading",
      };
    case "BASKET_PRODUCT_FETCHED":
      return {
        ...state,
        basketProducts: [...action.payload],
        basketProductsLoadingStatus: "idle",
      };
    case "BASKET_PRODUCT_FETCHING_ERROR":
      return {
        ...state,
        basketProductsLoadingStatus: "error",
      };
    case "DELETE_BASKET_PRODUCT":
      return {
        ...state,
        basketProducts: action.payload,
      };
    case "SET_ORDER_PRODUCTS":
      return {
        ...state,
        orderProducts: action.payload,
      };
    case "CHANGE_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    case "EVENTS_FETCHING":
      return {
        ...state,
        eventsLoadingStatus: "loading",
      };
    case "EVENTS_FETCHED":
      return {
        ...state,
        events: action.payload,
        eventsLoadingStatus: "idle",
      };
    case "EVENTS_FETCHING_ERROR":
      return {
        ...state,
        eventsLoadingStatus: "error",
      };
    default:
      return state;
  }
};

export default reducer;
