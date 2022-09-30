import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Post } from '../types/posts.types'
export enum APIstatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export type APIError = { message: string; code: number };

export type APIData<DataType = any> = {
  status: string;
  error?: APIError;
  data?: DataType;
};

export const internalError = {
  message: "Internal Error",
  code: -500,
};

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (error: any) => Promise.reject(internalError);


// =================================================================

export const movieRequest = axios.create({
  baseURL: "http://img.omdbapi.com/",
});

movieRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse);

// export type Response = { results: Post[] };

const DEFAULT_SEARCH_QUERY = 'sport';

export const getMovieDetails = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>(
  "http://img.omdbapi.com/?i=tt3896198&apikey=8018e9cd", 
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await movieRequest.get
        // <Response>
        ("", {
          params: {
            apikey: "8018e9cd",
            s: searchQuery || DEFAULT_SEARCH_QUERY,
            limit: 250,
          },
        });

      return response.data;
    }
    catch (ex) {
      return rejectWithValue(getExceptionPayload(ex));
    }
  }
);

// =================================================================

export const initialState = {
  fetchPosts: { status: APIstatus.IDLE },
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