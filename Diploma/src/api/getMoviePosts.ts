import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "../types/api.types";
import { getExceptionPayload, publicRequest } from "./services";

const DEFAULT_SEARCH_QUERY = "fantasy";

export const getMoviePosts = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>("getMoviePosts", async (searchQuery, { rejectWithValue }) => {
  try {
    const response = await publicRequest.get<Response>("", {
      params: {
        apikey: "8018e9cd",
        s: searchQuery || DEFAULT_SEARCH_QUERY,
        limit: 250,
      },
    });

    return response.data;
  } catch (ex) {
    return rejectWithValue(getExceptionPayload(ex));
  }
});
