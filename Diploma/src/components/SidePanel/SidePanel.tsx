import { Link } from "react-router-dom";
import house from "../../assets/icons/sidePanel/house.png";
import films from "../../assets/icons/sidePanel/films.png";
import favourite from "../../assets/icons/sidePanel/favourite.png";
import "./sidePanelStyle.css";

type SidePanelProps = {
  onClick: () => void;
  home: string;
  all_films: string;
  add_post: string;
  favorites_movies: string;
};

export const SidePanel = (props: SidePanelProps) => {
  const { home, all_films, favorites_movies } = props;
  return (
    <div className="sidePanelContainer">
      <div className="titleSidePanel">
        <h1 className="textMenuSidePanel">
          Me<span className="titleSpanSidePanel">nu</span>
        </h1>
      </div>

      <div className="listSidePanel">
        <ul>
          <li>
            <img className="iconsSidePanel" src={house} alt="#" />
            <Link className="linkListSidePanel" to="/home">
              {home}
            </Link>
          </li>
          <li>
            <img className="iconsSidePanel" src={films} alt="#" />
            <Link className="linkListSidePanel" to="/all_films">
              {all_films}
            </Link>
          </li>
          <li>
            <img className="iconsSidePanel" src={favourite} alt="#" />
            <Link className="linkListSidePanel" to="/favourite_Movies">
              {favorites_movies}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

