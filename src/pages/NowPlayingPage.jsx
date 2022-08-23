import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import useNowPlaying from "../hooks/useNowPlaying";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MoviesCard from "../components/MovieCard";

const NowPlayingPage = () => {
  //Very simple custom hook that fetches the movies currently playing in theaters
  const { data, isError, isLoading } = useNowPlaying();

  //Returns a container with a header
  return (
    <Container className="py-3 px-2 text-center">
      <h1>Now playing</h1>

      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      {/* And a generic card component with the data from the simple custom hook as props*/}
      {data && (
        <Row>
          <MoviesCard data={data.results} />
        </Row>
      )}
    </Container>
  );
};

export default NowPlayingPage;
