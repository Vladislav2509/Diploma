import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navBar/NavBar';
import { HomePage } from './components/pages/HomePage/HomePage';
import { Login } from './components/Authorization/Login/Login';
import { Registration } from './components/Authorization/Registration/Registration';
import { RegistrationConfirmation } from './components/Authorization/RegistrationConfirmation/RegistrationConfirmation';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ResetPassword } from './components/Authorization/reset-password/reset-password';
import { MainMoviePage } from './components/pages/MoviePages/MainPage/MainMoviePage/MainMoviePage-Fetch';
import { DetailsMovie } from './components/pages/MoviePages/ExpandedPage/DetailsCardsMoviePage/DetailsCardsMoviePage';
import { FavoriteMovies } from './components/pages/MoviePages/FavouriteEmptyMovie-Pages/FavouriteMoviesPage/FavoriteMovies';



export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>

                <Route path="/all_films" element={
                    <ProtectedRoute>
                        <MainMoviePage/>
                    </ProtectedRoute>
                }>
                </Route>

                <Route path="/favourite_Movies" element={
                    <ProtectedRoute>
                        <FavoriteMovies />
                    </ProtectedRoute>
                }>
                </Route>

                <Route path="/Movie_Details/:movieID" element={
                    <ProtectedRoute>
                        <DetailsMovie/>
                    </ProtectedRoute>
                }>
                </Route>

                <Route path="/user" element={<Login />} />

                <Route path="/home" element={<HomePage />} />

                <Route path="/Login" element={<Login />} />

                <Route path="/registration" element={<Registration />}></Route>

                <Route path="/registrationConfirmation" element={<RegistrationConfirmation email={''} />}></Route>

                <Route path="/backToHome" element={<HomePage />}></Route>

                <Route path="/reset_password" element={<ResetPassword />}></Route>

            </Route>



        </Routes>

    )
};

