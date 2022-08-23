import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import useNowPlaying from "../hooks/useNowPlaying";
import MoviesCard from "../components/MovieCard";

const NowPlayingPage = () => {
  //Very simple custom hook that fetches the movies currently playing in theaters
  const { data, isError, isLoading } = useNowPlaying();

  //Returns a container with a header
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <h1 className="text-4xl text-center ">Now playing: </h1>

        {isLoading && <LoadingSpinner />}

        {isError && <h2>Something went wrong...</h2>}

        {/* And a generic card component with the data from the simple custom hook as props*/}
        {data && (
          <div>
            <MoviesCard data={data.results} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NowPlayingPage;
