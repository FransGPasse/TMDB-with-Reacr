import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import usePopular from "../hooks/usePopular";
import PopularMoviesCard from "../components/PopularMoviesCard";
import Container from "react-bootstrap/Container";

//The page for the 20 most popular movies, currently
const PopularMoviesPage = () => {
  //Very simple custom hook that fetches the movies
  const { data: popular_movies, error, isError, isLoading } = usePopular();

  //Returns a container with a header
  return (
    <Container className="py-3 px-2">
      <h1>Popular movies</h1>

      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      {popular_movies && <PopularMoviesCard popular_movies={popular_movies} />}
    </Container>
  );
};

export default PopularMoviesPage;
