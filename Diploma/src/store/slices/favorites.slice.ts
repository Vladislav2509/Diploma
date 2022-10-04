import { createSlice } from "@reduxjs/toolkit";
import { IFavorites } from "../../types/favorites.types";

const initialState = {
  favoritesData: [] as IFavorites[],
};

export const favoritesSlice = createSlice({
  name: "Favorites",
  initialState: initialState,
  reducers: {
    favorites(state, action) {
      if (state.favoritesData.length > 0) {
        for (let index = 0; index < state.favoritesData.length; index++) {
          const element = state.favoritesData[index];
          if (element.title === action.payload.title) {
            state.favoritesData.splice(index, 1);
          }
        }
        state.favoritesData.push(action.payload);
      } else {
        state.favoritesData.push(action.payload);
      }
      for (let index = 0; index < state.favoritesData.length; index++) {
        const element = state.favoritesData[index];
        if (element.isFavorite === false) {
          state.favoritesData.splice(index, 1);
        }
      }

      state.favoritesData.sort(function (a: IFavorites, b: IFavorites) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
  },
});

export const { reducer: favoritesReducer, actions: favoritesActions } =
  favoritesSlice;
