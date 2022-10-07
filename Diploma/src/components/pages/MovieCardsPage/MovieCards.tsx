import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MovieCardsProps } from "../../../types/movieCards.types";
import iconbookmark from "../../../assets/icons/bookmark.svg";
import "./movieCardsStyle.css";


export const MovieCardsPage = ({ id, image, title, year }: MovieCardsProps) => {
  const { } = useSelector((state: any) => state.moviePosts.postData);

  return (
    <div className="cardsWrapper">
      <Link to={`/Movie_Details/${id}`}>
        <img className="movieCardsImg" src={image} />
      </Link>
      <Link to={`/Movie_Details/${id}`}>
        <h3 className="movieCardsTitle">{title}</h3>
      </Link>
      <h4 className="cardYear">{year}</h4>

      <div className="cardBookmark">
        <img src={iconbookmark} alt="bookmark" />
      </div>
    </div>
  );
};
