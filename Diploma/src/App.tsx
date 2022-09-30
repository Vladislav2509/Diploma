import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navBar/NavBar';
import { HomePage } from './components/HomePage/HomePage';



import { Login } from './components/Authorization/LoginRight/Login/Login';
import { Registration } from './components/Authorization/LoginRight/Registration/Registration';
import { RegistrationConfirmation } from './components/Authorization/LoginRight/RegistrationConfirmation/RegistrationConfirmation';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ResetPassword } from './components/Authorization/LoginRight/reset-password/reset-password';
import { AddPost } from './components/postCard/AddPost/AddPost';
import { PostMovieFetch } from './components/postCard/MainPosts-Fetch/PostMovie-Fetch/PostMovieFetch';
import { FavouriteMoviesPage } from './components/pages/favouriteEmpty-Pages/favouriteMoviesPage/favouriteMovies';





export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>

                <Route path="/all_films" element={
                    <ProtectedRoute>
                        <PostMovieFetch/>
                    </ProtectedRoute>
                }>
                </Route>

                <Route path="/add_post" element={
                    <ProtectedRoute>
                        <AddPost />
                    </ProtectedRoute>
                }>
                </Route>

                <Route path="/favourite_Movies" element={
                    <ProtectedRoute>
                        <FavouriteMoviesPage />
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

                {/* <Route path="/detailed_search" element={<DetailedSearch />}></Route> */}


            </Route>



        </Routes>

    )
};

