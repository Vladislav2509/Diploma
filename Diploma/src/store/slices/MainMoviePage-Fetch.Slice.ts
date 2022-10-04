import { createSlice } from "@reduxjs/toolkit";

import { getMovieData, getMoviePosts } from "../../api/fetchMoviePosts";
import { APIstatus } from "../../types/apiTypes";



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
        if (action.payload.Response === 'True') {
          state.postData = action.payload.Search;
        } else {
          state.postData = [];
        }
      })
      .addCase(getMoviePosts.rejected, (state) => {
        state.postsStatus.status = APIstatus.REJECTED;
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        state.currentPost = action.payload
      })

  },
});

export const { reducer: postsReducer, actions: postActions } = fetchPostsSlice;