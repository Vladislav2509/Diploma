import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import "./paginationStyle.css";

export function PostsPagination({ postsCount, onChange }: any) {
    const [page, setPage] = useState(1);

    const POSTS_COUNT_PAGE = 8;
    const pagesCount = Math.ceil(postsCount / POSTS_COUNT_PAGE);
    const start = (page - 1) * POSTS_COUNT_PAGE;
    const end = start + POSTS_COUNT_PAGE;

    useEffect(() => {
        onChange(start, end);
    }, [start, end])

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