import { createSlice } from "@reduxjs/toolkit";
import { getMoviePosts } from "../../api/getMoviePosts";
import { getMovieDetails } from "../../api/getMovieDetails";
import { APIstatus } from "../../types/api.types";

const initialState: any = {
  postsStatus: { status: APIstatus.IDLE },
  postData: [],
  currentPost: null,
};

export const fetchPostsSlice = createSlice({
  name: "Fetch Posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviePosts.pending, (state) => {
        state.postsStatus.status = APIstatus.PENDING;
      })
      .addCase(getMoviePosts.fulfilled, (state, action) => {
        state.postsStatus.status = APIstatus.FULFILLED;
        if (action.payload.Response === "True") {
          state.postData = action.payload.Search;
        } else {
          state.postData = [];
        }
      })
      .addCase(getMoviePosts.rejected, (state) => {
        state.postsStatus.status = APIstatus.REJECTED;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.currentPost = action.payload;
      });
  },
});

export const { reducer: postsReducer, actions: postActions } = fetchPostsSlice;
