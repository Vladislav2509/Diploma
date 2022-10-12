import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { DetailedSearch } from "../Search/DetailedSearch/DetailedSearch";
import { SearchBar } from "../Search/SearchBar";
import { SidePanel } from "../SidePanel/SidePanel";

import iconBurger from "../../assets/icons/burger.svg";
import iconUser from "../../assets/icons/user.svg";
import iconLogOut from "../../assets/icons/logOut.svg";
import frame from "../../assets/icons/frame.png";

import "./navBarStyle.css";

export function NavBar(): JSX.Element {
    const navigate = useNavigate();
    const [openDetailedSearch, setopenDetailedSearch] = useState(false);
    const [openSidePanel, setOpenSidePanel] = useState(true);
    const { logout } = useAuth();
    const handleLogout = (): void => {
        logout();
    };
    const { user } = useAuth();
    const { userEmail } = useAuth();

    const UserTitle = "User Name";



    return (
        <div>
            <div className="navBarContainer">
                <div className="burger__UserName">
                    <div
                        className="wrapperBurgerIcon"
                        onClick={() => setOpenSidePanel(!openSidePanel)}
                    >
                        <img className="headerIcon" src={iconBurger} alt="#" />
                    </div>

                    <div className="wrapperTitleUser">
                        <div className="changeUserTitle">
                            {!user ? UserTitle : userEmail}
                        </div>
                    </div>
                </div>

                <div
                    className="wrapperDetailedSearchIcon"
                    onClick={() => setopenDetailedSearch(!openDetailedSearch)}
                >
                    <img className="headerIcon" src={frame} alt="#" />
                </div>

                <SearchBar />

                <div
                    className="wrapperUserIcon"
                    onClick={() => {
                        navigate("/user");
                    }}
                >
                    <img className="headerIcon" src={iconUser} alt="#" />
                </div>

                <div
                    className="wrapperLogoutIcon"
                    onClick={() => {
                        navigate("/home");
                        handleLogout();
                    }}
                >
                    <img className="headerIcon" src={iconLogOut} alt="#" />
                </div>

                {openSidePanel && (
                    <SidePanel
                        onClick={() => setOpenSidePanel(!openSidePanel)}
                        home={"Home"}
                        all_films={"All Movies"}
                        add_post={"Add post"}
                        favorites_movies={"Favorites Movies"}
                    />
                )}

                {openDetailedSearch && (
                    <DetailedSearch
                        onClick={() => setopenDetailedSearch(!openDetailedSearch)}
                        filters={"Filters"}
                        sort_by={"Sort by"}
                        rating={"Rating"}
                        year={"Year"}
                        full_or_short_movie_name={"Full or short movie name"}
                    />
                )}
            </div>
            <Outlet />
        </div>
    );
}
