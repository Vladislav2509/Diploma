import axiosCore, { AxiosError } from "axios";

import { refreshToken } from "./refresh-token";

export const authAxiosInstance = axiosCore.create();

let attemptsCount = 0;

authAxiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.name === "AxiosError") {
    const { config: originalRequest, response } = error;
    const status = response ? response.status : -1;

    if (status === 401 && attemptsCount < 3) {
      attemptsCount += 1;
      return refreshToken().then(() => authAxiosInstance(originalRequest));
    }
    return error.response;
  }
  attemptsCount = 0;

  throw error;
});

authAxiosInstance.interceptors.request.use((requestConfigArg) => {
  const requestConfig = requestConfigArg || {};

  const accessToken = localStorage.getItem("access-token");

  requestConfig.headers = requestConfig.headers || {};

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return requestConfig;
});
