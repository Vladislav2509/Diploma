import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from './slices/postMovieFetch.Slice';

import counterReducer from "./slices/counterSlice";

import { favouriteReducer } from "./slices/favouriteMovies/favourite.slice";


export const store = configureStore({
    reducer: {

        counter: counterReducer,
        postsMovie: postsReducer,

        favourite: favouriteReducer,

    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;