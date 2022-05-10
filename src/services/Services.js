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

  const _transformProducts = (data, id) => {
    return data.filter((item) => item.category_id === id);
  };

  const _transformRecentProducts = (data) => {
    return data.slice(-3);
  };

  return {
    getCategories,
    getProducts,
    getRecentProducts,
    status,
    setStatus,
    clearError,
  };
};

export default useServices;
