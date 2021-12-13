import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers = {
        Authorization: `bearer ${token}`,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const errorMsg = error?.response?.data?.error?.message;

    if (errorMsg) {
      alert(errorMsg);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
