import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";

import { useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";

const SingleGenrePage = () => {
  const { id } = useParams();

  //Calls getSingleGenre from the API-page
  const { data, isError, isLoading } = useQuery(
    ["genres", id],
    MovieAPI.getSingleGenre
  );

  //Returns a container with a header
  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {/* And a generic card component with the data from the simple custom hook as props*/}
        {data && <MovieCard data={data.results} />}
      </div>
    </div>
  );
};

export default SingleGenrePage;
