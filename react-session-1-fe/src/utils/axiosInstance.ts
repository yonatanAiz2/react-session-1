import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: "/api/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const { token } = store.getState().auth;

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
