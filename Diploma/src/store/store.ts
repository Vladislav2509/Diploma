import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./slices/moviePosts.Slice";
import { favoritesReducer } from "./slices/favorites.slice";

import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    moviePosts: postsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
