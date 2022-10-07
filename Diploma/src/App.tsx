import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { NavBar } from "./components/NavBar/NavBar";
import { MainMoviePage } from "./components/pages/MovieMainPage/MoviePage";
import { MovieDetailsPage } from "./components/pages/MovieDetailsPage/Details";
import { FavoritePage } from "./components/pages/MovieFavoritePage/Favorite";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { Login } from "./components/pages/AuthPage/Login/Login";
import { Registration } from "./components/pages/AuthPage/Registration/Registration";
import { RegistrConfirmation } from "./components/pages/AuthPage/RegistrConfirm/RegistrConfirmation";
import { ResetPassword } from "./components/pages/AuthPage/ResetPassword/ResetPassword";



export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route
                    path="/all_films"
                    element={
                        <ProtectedRoute>
                            <MainMoviePage />
                        </ProtectedRoute>
                    }
                ></Route>

                <Route
                    path="/Movie_Details/:movieID"
                    element={
                        <ProtectedRoute>
                            <MovieDetailsPage />
                        </ProtectedRoute>
                    }
                ></Route>

                <Route
                    path="/favourite_Movies"
                    element={
                        <ProtectedRoute>
                            <FavoritePage />
                        </ProtectedRoute>
                    }
                ></Route>

                <Route path="/home" element={<HomePage />} />

                <Route path="/backToHome" element={<HomePage />}></Route>

                <Route path="/user" element={<Login />} />

                <Route path="/Login" element={<Login />} />

                <Route path="/registration" element={<Registration />}></Route>

                <Route
                    path="/registrConfirmation"
                    element={<RegistrConfirmation />}
                ></Route>

                <Route path="/reset_password" element={<ResetPassword />}></Route>
            </Route>
        </Routes>
    );
};
