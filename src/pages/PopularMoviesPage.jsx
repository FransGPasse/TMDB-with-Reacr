import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import usePopular from "../hooks/usePopular";
import PopularMoviesCard from "../components/MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//The page for the 20 most popular movies, currently
const PopularMoviesPage = () => {
  //Very simple custom hook that fetches the movies
  const { data, isError, isLoading } = usePopular();

  //Returns a container with a header
  return (
    <Container className="py-3 px-2 text-center">
      <h1>Popular movies</h1>

      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      {/* And a generic card component with the data from the simple custom hook as props*/}
      {data && (
        <Row>
          <PopularMoviesCard data={data.results} />
        </Row>
      )}
    </Container>
  );
};

export default PopularMoviesPage;
