import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieData } from "../../../../../api/fetchMoviePosts";


import iconBookmark from "../../../../../images/IconsFetch/bookmark.svg";
import { useAppDispatch } from "../../../../../store/store";


import './detailsCardsMoviePageStyle.css';



export function DetailsMovie() {
  
  const dispatch = useAppDispatch();
  const { movieID } = useParams();

  const post = useSelector((state: any) => state.postsMovie.currentPost);
  console.log(post);


  useEffect(() => {
    if (movieID)
      dispatch(getMovieData(movieID));
  });


  // console.log(data);

  // function getDetails(state: any, id: string | undefined) {
  //   if (state.length > 0) {
  //     const result = state.find((element: any) => element.imdbID === id);
  //     return result;
  //   }
  // }
  // console.log(getDetails(data, movieID));
  // const currentData = getDetails(data, movieID)


  if (!post) { return null }

  return (
    <div className="newInput" >
      <div className="ContainerDetailsMovie">

        <div className="poster">
          <img className="movieDetailsPoster" src={post.Poster} />
          <div className="BookmarkDetailsMovie">
            <img src={iconBookmark} alt="Bookmark" />
          </div>
        </div>


        <div className="allContent">

          <p>{post.Genre}</p>
          <h1>{post.Title}</h1>
          <div className="ratingRuntime">
            <p className="imdbRating">{post.imdbRating}</p>
            <p className="runtime">{post.Runtime}</p>
          </div>
          <div className="plot">
            <p>{post.Plot}</p>
          </div>


          <div className="containerСategories">

            <div className="allСategories">
              <p className="description">Year</p>
              <p className="detailsMovie">{post.Year}</p>
            </div>
            <div className="allСategories">
              <p className="description">Released</p>
              <p className="detailsMovie">{post.Released}</p>
            </div>
            <div className="allСategories">
              <p className="description">BoxOffice</p>
              <p className="detailsMovie">{post.BoxOffice}</p>
            </div>
            <div className="allСategories">
              <p className="description">Country</p>
              <p className="detailsMovie">{post.Country}</p>
            </div>
            <div className="allСategories">
              <p className="description">Production</p>
              <p className="detailsMovie">{post.Production}</p>
            </div>
            <div className="allСategories">
              <p className="description">Actors</p>
              <p className="detailsMovie">{post.Actors}</p>
            </div>
            <div className="allСategories">
              <p className="description">Director</p>
              <p className="detailsMovie">{post.Director}</p>
            </div>
            <div className="allСategories">
              <p className="description">Writers</p>
              <p className="detailsMovie">{post.Writer}</p>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}