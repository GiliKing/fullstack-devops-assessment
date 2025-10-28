import axios from "axios";
import { RenderErrorMessage, RenderSuccessMessage } from "../helpers/Functions";

const authApi = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_LOCAL_BASEURL
            : process.env.REACT_APP_PROD_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

authApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authApi.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response.status === 401) {
            RenderErrorMessage(error.response.data.message).then(() => {
                localStorage.clear();
            });
        } else if (error.response.status === 503) {
            RenderSuccessMessage(error.response.data.message);
        } else {
            RenderErrorMessage(error.response.data.message);
            throw new Error(error.response.data.message, {
                cause: error.response.status,
            });
        }
    }
);


export const createForm = (data) => {
  return authApi.post(`/forms`, data, {
    headers: {
      "Content-Type": data instanceof FormData ? "multipart/form-data" : "application/json",
    },
  });
};
