import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { movieDetailsAction } from "../../../store/movieDetails/movieDetails.actions";
import { useAppDispatch } from "../../../store/store";
import { Footer } from "../../Footer/Footer";
import iconBookmark from "../../../assets/icons/bookmark.svg";
import "./detailsStyle.css";


export function MovieDetailsPage() {
  const dispatch = useAppDispatch();
  const { movieID } = useParams();

  const post = useSelector((state: any) => state.movieDetails.currentPost);

  useEffect(() => {
    if (movieID) dispatch(movieDetailsAction(movieID));
  });

  if (!post) {
    return null;
  }

  return (
    <div>
      <div className="newInput">
        <div className="detailsMovieContainer">
          <div className="poster">
            <img className="movieDetailsPoster" src={post.Poster} />
            <div className="bookmarkDetailsMovie">
              <img
                className="imgBookmarkDetailsMovie"
                src={iconBookmark}
                alt="Bookmark"
              />
            </div>
          </div>

          <div className="allContent">
            <p className="genreDetailsMovie">{post.Genre}</p>
            <h1 className="titleDetailsMovie">{post.Title}</h1>
            <div className="ratingDetailsMovie">
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
      <Footer />
    </div>
  );
}
