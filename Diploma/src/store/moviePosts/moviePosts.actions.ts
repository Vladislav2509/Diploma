import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviePosts } from "../../api/getMoviePosts";
import { APIError } from "../../types/api.types";

export const moviePostsAction = createAsyncThunk<
  any,
  string,
  { rejectValue: APIError }
>("getMoviePosts", getMoviePosts);
