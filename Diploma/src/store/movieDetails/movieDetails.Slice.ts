import { createSlice } from "@reduxjs/toolkit";
import { APIstatus } from "../../types/api.types";
import { movieDetailsAction } from "./movieDetails.actions";

const initialState: any = {
  postsStatus: { status: APIstatus.IDLE },
  postData: [],
  currentPost: null,
};

export const fetchDetailsSlice = createSlice({
  name: "Movie Details",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(movieDetailsAction.fulfilled, (state, action) => {
      state.currentPost = action.payload;
    });
  },
});

export const { reducer: detailsReducer, actions: postActions } =
  fetchDetailsSlice;
