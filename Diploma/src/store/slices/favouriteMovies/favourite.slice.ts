import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../../../A.bettaVersion/enums/localStorage";
import { MovieType } from "../../../A.bettaVersion/types/movieType";
import { initialState } from "../../../A.bettaVersion/utils/localStorage";

export const favouriteMoviesSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteList: initialState(LocalStorage.FavouriveMovies) as Array<
      MovieType["imdbID"]
    >,
    error: "" as string,
  },
  reducers: {
    inFavourite: (state, action) => {
      if (!state.favouriteList.includes(action.payload)) {
        state.favouriteList.push(action.payload);
      }
    },
    fromFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter(
        (movieId) => movieId !== action.payload
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { reducer: favouriteReducer, actions: favouriteAction } =
  favouriteMoviesSlice;
