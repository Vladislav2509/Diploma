import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";


import { getMoviePosts } from "../../../../../api/fetchMoviePosts";

import { useAppDispatch } from "../../../../../store/store";

import { MainCards } from "../MainMovieCards/MainCardsMoviePage";

import GridLoader from "react-spinners/GridLoader";

import './mainMoviePage.css';
import { Footer } from "../../../../Footer/Footer";



export function MainMoviePage() {

  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const posts = useSelector((state: any) => state.postsMovie.postData);


  // Search
  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';


  // UseEffect=Search+MovieDetails
  useEffect(() => {
    dispatch(getMoviePosts(postQuery))
  }, [postQuery]);


  // Pagination
  const POSTS_COUNT_PAGE = 8;
  const pagesCount = Math.ceil(posts.length / POSTS_COUNT_PAGE);
  const start = (page - 1) * POSTS_COUNT_PAGE;
  const end = start + POSTS_COUNT_PAGE;
  const postsOnPage = posts.slice(start, end);


  // SPINER
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 500)

  }, [])






  return (
    <div className="containerPostCardFetch">
      <div>
        {
          loading ?
            <div className='gridLoader'><GridLoader color={'#7B61FF'} loading={loading} size={30} /></div>
            :
            <>
              <div className="blogH1">
                <h1 className="pixH1">Pix<span className="emaH1">ema</span></h1>
              </div>

              <div className="wrapperPostFetch">

                {postsOnPage &&
                  postsOnPage
                    .map((result: any): JSX.Element => {
                      return (
                        <MainCards
                          key={result.imdbID}
                          id={result.imdbID.toString()}
                          image={result.Poster}
                          title={result.Title}
                          year={result.Year}
                          country={result.Country}
                        />
                      );
                    })
                }

              </div>

              <div className="pagination">
                {pagesCount > 1 && (
                  <Pagination className="paginationMaterial"
                    count={pagesCount}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                  />
                )
                }
              </div>
              <Footer />
            </>

        }

      </div>

    </div>
  );
};




