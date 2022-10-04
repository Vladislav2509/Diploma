import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { SearchBar } from './SearchBar/searchBar';
import { Sidebar } from '../pages/SidebarPage/Sidebar';

import iconBurger from '../../images/icons/menu.svg';
import iconUser from '../../images/icons/user.svg';
import iconLogOut from '../../images/icons/logOut.svg';

import '../navBar/navBarStyle.css';
import frame from '../../images/frame.png';
import { DetailedSearch } from './SearchBar/detailedSearch/DetailedSearch';
import { HomePage } from '../pages/HomePage/HomePage';



export function NavBar(): JSX.Element {
    const navigate = useNavigate();
    const [openSidebar, setOpenSidebar] = useState(true);
    const { logout } = useAuth();
    const handleLogout = (): void => {
        logout();
    };
    const { user } = useAuth();
    const { userEmail } = useAuth();
    const UserTitle = "User Name";

    const [openDetailedSearch, setopenDetailedSearch] = useState(false)


    return (
        <div>
            <div className='headerNavBar'>

                <div className='burgerAndUserNameNavBar'>
                    <div className="burgerImgNavBar" onClick={() => setOpenSidebar(!openSidebar)}>
                        <img className='headerIcon' src={iconBurger} alt="#" />
                    </div>

                    <div className='userEmailNavBar'>
                        <div className='userTitleEmailNavBar'>{!user ? UserTitle : userEmail}</div>
                    </div>
                </div>


                {/* DetailedSearch */}
                {/* ======================================================================= */}

                <div className='imgDetailedSearch' onClick={() => setopenDetailedSearch(!openDetailedSearch)}>
                    <img className='headerIcon' src={frame} alt="" />
                </div>
                {/* ======================================================================= */}

                <SearchBar />

                <div className="userNavBar" onClick={() => {
                    navigate("/user")
                }}>
                    <img className='headerIcon' src={iconUser} alt="#" />
                </div>

                <div className='logoutNavBar' onClick={() => {
                    navigate("/home")
                    handleLogout()
                }}>
                    <img className='headerIcon' src={iconLogOut} alt="#" />
                </div>



                {/* Sidebar Props*/}
                {openSidebar && (<Sidebar onClick={() => setOpenSidebar(!openSidebar)}
                    home={'Home'} all_films={'All Movies'}
                    add_post={'Add post'} favorites_movies={'Favorites Movies'}
                />)}


                {/* DetailedSearch Props*/}
                {openDetailedSearch && (<DetailedSearch onClick={() => setopenDetailedSearch(!openDetailedSearch)}
                    filters={'Filters'} sort_by={'Sort by'} rating={'Rating'}
                    year={'Year'} full_or_short_movie_name={'Full or short movie name'}
                />)}


            </div>

            <Outlet />
            
                
        </div>
    );
}








