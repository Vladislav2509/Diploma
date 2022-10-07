import axios, { AxiosResponse } from "axios";
import { APIError } from "../types/api.types";

export const publicRequest = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = () => Promise.reject(internalError);

publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse);

export const internalError = {
  message: "Internal Error",
  code: -500,
};

export const getExceptionPayload = (ex: unknown): APIError => {
  if (typeof ex !== "object" || !ex) {
    return internalError;
  }

  const typeException = ex as APIError;
  if (
    ex.hasOwnProperty("message") &&
    typeof typeException.message === "string" &&
    ex.hasOwnProperty("code") &&
    typeof typeException.code === "number"
  ) {
    return {
      message: typeException.message,
      code: typeException.code,
    };
  }
  return internalError;
};
