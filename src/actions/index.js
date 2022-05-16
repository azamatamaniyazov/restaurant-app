export const categoriesFetching = () => {
  return {
    type: "CATEGORIES_FETCHING",
  };
};

export const categoriesFetched = (categories) => {
  return {
    type: "CATEGORIES_FETCHED",
    payload: categories,
  };
};

export const categoriesFetchingError = () => {
  return {
    type: "CATEGORIES_FETCHING_ERROR",
  };
};

export const changeActiveCategoryId = (id) => {
  return {
    type: "CHANGE_ACTIVE_CATEGORY_ID",
    payload: id,
  };
};

export const productsFetching = () => {
  return {
    type: "PRODUCTS_FETCHING",
  };
};

export const productsFetched = (products) => {
  return {
    type: "PRODUCTS_FETCHED",
    payload: products,
  };
};

export const productsFetchingError = () => {
  return {
    type: "PRODUCTS_FETCHING_ERROR",
  };
};

export const basketProductFetching = () => {
  return {
    type: "BASKET_PRODUCT_FETCHING",
  };
};

export const basketProductFetched = (product) => {
  return {
    type: "BASKET_PRODUCT_FETCHED",
    payload: product,
  };
};

export const basketProductFetchingError = () => {
  return {
    type: "BASKET_PRODUCT_FETCHING_ERROR",
  };
};

export const deleteBasketProduct = (id) => {
  return {
    type: "DELETE_BASKET_PRODUCT",
    payload: id,
  };
};
