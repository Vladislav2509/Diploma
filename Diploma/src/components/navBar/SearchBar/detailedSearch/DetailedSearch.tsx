import React from "react";
import { useSearchParams } from "react-router-dom";
import "./detailedSearchStyle.css";

type DetailedSearchProps = {
    onClick: () => void;
    filters: string;
    sort_by: string;
    rating: string;
    year: string;
    full_or_short_movie_name: string;
};

export const DetailedSearch = (props: DetailedSearchProps) => {
    const { filters, sort_by, rating, year, full_or_short_movie_name } = props;

    const [searchParams, setSearchParams] = useSearchParams();
    const { } = searchParams.get("post") || "";
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        setSearchParams({ post: query });
    };

    return (
        <div className="detailedSearch">
            <div className="filters">
                <div className="textFilters">{filters}</div>

                <div className="ratingYear">
                    <p className="textSortby">{sort_by}</p>

                    <button className="buttonRatingYear">{rating}</button>

                    <button className="buttonRatingYear">{year}</button>

                    <p className="textMovieName">{full_or_short_movie_name}</p>

                    <div className="searchBarImport">
                        <form
                            className="formSearch"
                            autoComplete="on"
                            onSubmit={handleSubmit}
                        >
                            <input
                                className="inputDetailedSearch"
                                type="search"
                                name="search"
                                placeholder="Your text"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
