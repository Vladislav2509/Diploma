import { createSlice } from "@reduxjs/toolkit";

import { APIstatus, getMoviePosts  } from "../../api/fetchMoviePosts";



const initialState = {
  postsStatus: { status: APIstatus.IDLE },
  postData: [],
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
      });
  },
});

export const { reducer: postsReducer, actions: postActions } = fetchPostsSlice;