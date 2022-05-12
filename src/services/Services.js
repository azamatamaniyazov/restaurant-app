import { useHttp } from "../hooks/http.hook";

const useServices = () => {
  const { request, status, setStatus, clearError } = useHttp();
  const _baseUrl = "http://restaurant.my-project.site/api";

  const getCategories = async () => {
    return await request(`${_baseUrl}/category`);
  };

  const getProducts = async (id) => {
    const response = await request(`${_baseUrl}/product`);

    return await _transformProducts(response, id);
  };

  const getRecentProducts = async () => {
    const response = await request(`${_baseUrl}/product`);

    return await _transformRecentProducts(response);
  };

  const getProduct = async (id) => {
    return await request(`${_baseUrl}/product/${id}`);
  };

  const _transformProducts = (data, id) => {
    const newArray = data.filter((item) => item.category_id === id);
    return {
      category_id: newArray[0].category_id,
      products: newArray,
    };
  };

  const _transformRecentProducts = (data) => {
    const newArray = data.slice(-3);
    return {
      category_name: "Недавно добавленный",
      products: newArray,
    };
  };

  return {
    getCategories,
    getProducts,
    getRecentProducts,
    getProduct,
    status,
    setStatus,
    clearError,
  };
};

export default useServices;
