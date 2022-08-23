import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";

const SingleMoviePage = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery(
    ["movie", id],
    MovieAPI.getSingleMovie
  );

  return (
    <>
      {isError && <h2>Something went wrong...</h2>}

      {isLoading && <LoadingSpinner />}

      {data && (
        <Container>
          <h1>{data.title}</h1>
          <h3>Genres:</h3>
          <ul>
            {data.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};

export default SingleMoviePage;
