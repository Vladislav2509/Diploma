import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError, APIstatus } from "../types/apiTypes";
import { Post } from '../types/posts.types'
import { getExceptionPayload, publicRequest } from "./actions";



export type Response = { results: Post[] };

const DEFAULT_SEARCH_QUERY = 'sport';

export const getMoviePosts = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>(
  "getMoviePosts",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await publicRequest.get
        <Response>
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


// DetailsMovie
export const getMovieData = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>(
  "getMovieData",
  async (i, { rejectWithValue }) => {
    try {
      const response = await publicRequest.get
        <Response>
        ("", {
          params: {
            apikey: "8018e9cd",
            i,
          },
        });

      return response.data;
    }
    catch (ex) {
      return rejectWithValue(getExceptionPayload(ex));
    }
  }
);

export const initialState = {
  fetchPosts: { status: APIstatus.IDLE },
};








