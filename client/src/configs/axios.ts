import axios, { AxiosInstance, AxiosResponse } from "axios";
import { jwtDecode } from "jwt-decode";
import authApi from "../api/auth";
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ApiResponse<T> {
  data: T;
}

interface ApiError<T> {
  data: T;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const decodeToken = (token: string | null): any => {
  if (!token) {
    return null;
  }
  return jwtDecode(token);
};

const handleError = (error: AxiosResponse<ApiError<any>>): Promise<never> => {
  return Promise.reject({
    data: error,
  });
};

axiosInstance.interceptors.response.use(
  (response: ApiResponse<any>) => {
    return response.data;
  },
  (error: AxiosResponse<ApiError<any>>) => {
    if (axios.isAxiosError(error)) {
      return handleError(error);
    }
    return Promise.reject(error);
  }
);

export const axiosInstanceWithToken = (token: string | null) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  instance.interceptors.request.use(
    async (config) => {
      try {
        if (config.headers) {
          const decodedToken = decodeToken(token);
          const isTokenAvailable =
            decodedToken && decodedToken.exp * 1000 < new Date().getTime();
          if (isTokenAvailable) {
            const res = await authApi.getAccessToken();
            if (res) {
              const accessToken = (res as unknown as { accessToken: string })
                .accessToken;
              if (accessToken) {
                config.headers["Authorization"] = `Bearer ${accessToken}`;
                return config;
              }
            }
          }
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance;
};

export default axiosInstance;
