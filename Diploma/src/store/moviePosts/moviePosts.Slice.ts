import { createSlice } from "@reduxjs/toolkit";
import { APIstatus } from "../../types/api.types";
import { moviePostsAction } from "./moviePosts.actions";

const initialState: any = {
  postsStatus: { status: APIstatus.IDLE },
  postData: [],
};

export const fetchPostsSlice = createSlice({
  name: "Movie Posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moviePostsAction.pending, (state) => {
        state.postsStatus.status = APIstatus.PENDING;
      })
      .addCase(moviePostsAction.fulfilled, (state, action) => {
        state.postsStatus.status = APIstatus.FULFILLED;
        if (action.payload.Response === "True") {
          state.postData = action.payload.Search;
        } else {
          state.postData = [];
        }
      })
      .addCase(moviePostsAction.rejected, (state) => {
        state.postsStatus.status = APIstatus.REJECTED;
      });
  },
});

export const { reducer: postsReducer, actions: postActions } = fetchPostsSlice;
