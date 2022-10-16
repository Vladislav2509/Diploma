import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieDetails } from "../../api/getMovieDetails";
import { APIError } from "../../types/api.types";

export const movieDetailsAction = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>("getMovieDetails", getMovieDetails);
