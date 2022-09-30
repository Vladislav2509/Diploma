import { RootState } from "../../store";

export const favouriteSelector = (
  state: RootState
): RootState["favourite"]["favouriteList"] => state.favourite.favouriteList;

export const favouriteErrorSelector = (
  state: RootState
): RootState["favourite"]["error"] => state.favourite.error;
