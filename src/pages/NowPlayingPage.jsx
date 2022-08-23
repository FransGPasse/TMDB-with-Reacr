import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import useNowPlaying from "../hooks/useNowPlaying";
import MoviesCard from "../components/MovieCard";

const NowPlayingPage = () => {
  //Very simple custom hook that fetches the movies currently playing in theaters
  const { data, isError, isLoading } = useNowPlaying();

  //Returns a container with a header
  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      <h1 className="text-4xl text-center">Now playing </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* And a generic card component with the data from the simple custom hook as props*/}
        {data && <MoviesCard data={data.results} />}
      </div>
    </div>
  );
};

export default NowPlayingPage;
