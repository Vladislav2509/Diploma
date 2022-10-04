import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { CardProps } from "./mainCardTypes";

import iconbookmark from "../../../../../images/IconsFetch/bookmark.svg";

import './mainCardsMoviePageStyle.css';
import { useState } from "react";
import { useAppDispatch } from "../../../../../store/store";
import { favoritesActions } from "../../../../../store/slices/favorites.slice";


export const MainCards = ({id, image, title, year,}: CardProps) =>

{
  const dispatch = useAppDispatch();
  // const { movieID } = useParams();

//   const state = useSelector((state: any) => state);

//   function getMovie(state: any, id: string | undefined) {
//     if (
//       state.cards.cardData.movies.length > 0 &&
//       state.search.searchData.length === 0
//     ) {
//       let movie = state.cards.cardData.movies.find((element: any) =>
//         element.url.indexOf(id) !== -1 ? element : null
//       );
//       return movie;
//     } else if (state.search.searchData.results.movies.length > 0) {
//       let searchedmovie = state.search.searchData.results.movies.find(
//         (element: any) => (element.url.indexOf(id) !== -1 ? element : null)
//       );
//       if (!searchedmovie) {
//         let result = state.cards.cardData.movies.find((element: any) =>
//           element.url.indexOf(id) !== -1 ? element : null
//         );
//         return result;
//       } else return searchedmovie;
//     }
//   }

// const currentMovie = getMovie(state, movieID);

  const data = useSelector((state: any) => state.postsMovie.postData);
  console.log(data);
  
  
  

  // const handleClickAddToFavorites = () =>
  //   dispatch(
  //     favoritesActions.favorites({
        
  //       Genre: currentMovie.Genre, 
  //       Title: currentMovie.Title,
  //       imdbRating: currentMovie.imdbRating,
  //       Runtime: currentMovie.Runtime,
  //       Year: currentMovie.Year,
  //       Released: currentMovie.Released,
  //       BoxOffice: currentMovie.BoxOffice,
  //       Country: currentMovie.Country,
  //       Production: currentMovie.Production,
  //       Actors: currentMovie.Actors,
  //       Director: currentMovie.Director,
  //       Writer: currentMovie.Writer,
  //       id: currentMovie.id,
  //       count: 1,
  //       isFavorite: isActive ? true : false,
  //     })
  //   );

  // const [isActive, setIsActive] = useState(true);
  return (
    <div className="cardsWrapper">
      <Link to={`/Movie_Details/${id}`}><img className="movieCardsImg" src={image} /></Link>
      <Link to={`/Movie_Details/${id}`}><h3 className="movieCardsTitle">{title}</h3></Link>
      <h4 className="cardYear">{year}</h4>

      <div className="cardmoviemark"
          // onClick={() => {
          //   setIsActive(!isActive);
          //   handleClickAddToFavorites();
          // }}
        >
          <img src={iconbookmark} alt="bookmark" />
        </div>
    </div>
  );
};
