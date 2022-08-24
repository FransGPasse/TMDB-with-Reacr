import React from "react";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import useGenres from "../hooks/useGenres";

const GenresPage = () => {
  //Simple custom hook to get all genres
  const { data, isLoading, isError } = useGenres();

  return (
    <div className="container flex-col items-center justify-center">
      <h1 className="text-4xl text-center">Genres</h1>

      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      {/* Buttons for every genre */}
      {data && <Button data={data.genres} />}
    </div>
  );
};

export default GenresPage;
