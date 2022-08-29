import React from "react";
import GenreButton from "../components/GenreButton";
import LoadingSpinner from "../components/LoadingSpinner";
import useGenres from "../hooks/useGenres";

const GenresPage = () => {
  //Simple custom hook to get all genres
  const { data, isSuccess, isLoading, isError } = useGenres();

  return (
    <div className="flex-col items-center justify-center">
      <h1 className="text-4xl text-center">Genres</h1>

      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      {/* Buttons for every genre */}
      {isSuccess && <GenreButton data={data.genres} />}
    </div>
  );
};

export default GenresPage;
