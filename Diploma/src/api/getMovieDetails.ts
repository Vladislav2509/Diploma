import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "../types/api.types";
import { getExceptionPayload, publicRequest } from "./services";

export const getMovieDetails = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>("getMovieDetails", async (i, { rejectWithValue }) => {
  try {
    const response = await publicRequest.get<Response>("", {
      params: {
        apikey: "8018e9cd",
        i,
      },
    });

    return response.data;
  } catch (ex) {
    return rejectWithValue(getExceptionPayload(ex));
  }
});
