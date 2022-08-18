import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import usePopular from "../hooks/usePopular";
import PopularMoviesCard from "../components/PopularMoviesCard";
import Container from "react-bootstrap/Container";

const PopularMoviesPage = () => {
  const { data: popular_movies, error, isError, isLoading } = usePopular();

  return (
    <Container className="py-3 px-5">
      <h1>Popular movies</h1>

      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      {popular_movies && <PopularMoviesCard popular_movies={popular_movies} />}
    </Container>
  );
};

export default PopularMoviesPage;
