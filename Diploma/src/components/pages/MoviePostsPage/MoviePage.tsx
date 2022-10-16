import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { moviePostsAction } from "../../../store/moviePosts/moviePosts.actions";
import { useAppDispatch } from "../../../store/store";
import { MovieCardsPage } from "../MovieCardsPage/MovieCards";
import { PostsPagination } from "../../Pagination/Pagination";
import { Footer } from "../../Footer/Footer";
import GridLoader from "react-spinners/GridLoader";
import "./moviePageStyle.css";

export function PostsMoviePage() {
  const posts = useSelector((state: any) => state.moviePosts.postData);
  const dispatch = useAppDispatch();

  const [postsBounds, setPostsBounds] = useState([0, 0]);
  const postsOnPage = posts.slice(postsBounds[0], postsBounds[1]);


  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";

  useEffect(() => {
    dispatch(moviePostsAction(postQuery));
  }, [postQuery]);


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="mainMoviePageContainer">
      <div>
        {loading ? (
          <div className="gridLoader">
            <GridLoader color={"#7B61FF"} loading={loading} size={30} />
          </div>
        ) : (
          <>
            <div className="blogH1">
              <h1 className="pixH1">
                Pix<span className="emaH1">ema</span>
              </h1>
            </div>

            <div className="wrapperMoviePage">
              {postsOnPage &&
                postsOnPage.map((result: any): JSX.Element => {
                  return (
                    <MovieCardsPage
                      key={result.imdbID}
                      id={result.imdbID.toString()}
                      image={result.Poster}
                      title={result.Title}
                      year={result.Year}
                      country={result.Country}
                    />
                  );
                })}
            </div>

            <PostsPagination
              postsCount={posts.length}
              onChange={(start: any, end: any) => setPostsBounds([start, end])}
            />

            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
