import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovieDetails } from "../../../../A.bettaVersion/api/getMovieDetails";
import { Card } from "../../../../A.bettaVersion/card/card";
import { EmptyContentPage } from "../../../../A.bettaVersion/emptyContentPage/emptyContentPage";
import { favouriteSelector } from "../../../../store/slices/favouriteMovies/favourite.selector";
import { MovieDetailsType } from "../../../../A.bettaVersion/types/movieDetailsType";
import { CardsWrapper } from "./favouriteMoviesPageStyles";

export function FavouriteMoviesPage(): JSX.Element {
  const movieIdList = useSelector(favouriteSelector);
  const [favouriteMovies, setFavouriteMovies] = useState<MovieDetailsType[]>(
    []
  );

  useEffect(() => {
    movieIdList.map((id) => {
      getMovieDetails(id).then((response) => {
        setFavouriteMovies((prev) => [...prev, response]);
      });
    });
  }, []);

  return (
    <>
      {movieIdList.length ? (
        <CardsWrapper>
          {favouriteMovies.map((movie) => {
            return <Card key={`${movie.imdbID}fav`} movie={movie} />;
          })}
        </CardsWrapper>
      ) : (
        <EmptyContentPage />
      )}
    </>
  );
}
