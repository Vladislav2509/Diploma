import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMoviePosts } from "../../api/getMoviePosts";
import { useAppDispatch } from "../../store/store";
import { MovieCardsPage } from "../pages/MovieCardsPage/MovieCards";



export function PaginationBlock() {

    const posts = useSelector((state: any) => state.moviePosts.postData);
    const [page, setPage] = useState(1);

    // Pagination
    const POSTS_COUNT_PAGE = 8;
    const pagesCount = Math.ceil(posts.length / POSTS_COUNT_PAGE);
    const start = (page - 1) * POSTS_COUNT_PAGE;
    const end = start + POSTS_COUNT_PAGE;
    const postsOnPage = posts.slice(start, end);



    return (


        <div className="pagination">

            {pagesCount > 1 && (
                <Pagination
                    className="paginationMaterial"
                    count={pagesCount}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                />

            )}
        </div>

    )
}