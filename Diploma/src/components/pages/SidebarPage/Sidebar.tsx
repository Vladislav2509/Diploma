import { Link } from 'react-router-dom';
import './sidebarStyle.css';

import house from '../../../images/iconsSideBar/house.png';
import films from '../../../images/iconsSideBar/films.png';
import favourite from '../../../images/iconsSideBar/favourite.png';


type InputProps = {
  onClick: () => void,
  home: string,
  all_films: string,
  add_post: string,
  favorites_movies: string,
}


export const Sidebar = (props: InputProps) => {
  const { home, all_films, favorites_movies } = props;
  return (
    <div className="sidebarPanel">
      <div className="menuSidebar">
        <h1 className='textMenuSidebar'>Me<span className='textMenuSpanSidebar'>nu</span></h1>
      </div>

      <div className="listSidebar">
        <ul>
          <li>
            <img className='iconsSidebar' src={house} alt="#" />
            <Link className='linkListSidebar' to="/home">{home}</Link>
          </li>
          <li>
            <img className='iconsSidebar' src={films} alt="#" />
            <Link className='linkListSidebar' to="/all_films">{all_films}</Link>
          </li>
          <li>
            <img className='iconsSidebar' src={favourite} alt="#" />
            <Link className='linkListSidebar' to="/favourite_Movies">{favorites_movies}</Link>
          </li>
        </ul>
      </div>

    </div>

  );
}

export default Sidebar;


