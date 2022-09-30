import { LocalStorage } from "../../../A.bettaVersion/enums/localStorage";
import { getMoviesDetailsResponseType } from "../../../A.bettaVersion/types/getMoviesDetailsResponseType";
import { AppDispatch, store } from "../../store";
import { favouriteAction } from "./favourite.slice";

export const addInFavourite =
  (payload: getMoviesDetailsResponseType["imdbID"]) =>
  (dispatch: AppDispatch) => {
    try {
      dispatch(favouriteAction.inFavourite(payload));
      localStorage.setItem(
        LocalStorage.FavouriveMovies,
        JSON.stringify(store.getState().favourite.favouriteList)
      );
    } catch {}
  };

export const removeFromFavourite =
  (payload: getMoviesDetailsResponseType["imdbID"]) =>
  (dispatch: AppDispatch) => {
    try {
      dispatch(favouriteAction.fromFavourite(payload));
      localStorage.setItem(
        LocalStorage.FavouriveMovies,
        JSON.stringify(store.getState().favourite.favouriteList)
      );
    } catch (e: any) {
      dispatch(favouriteAction.setError(e.message));
    }
  };
