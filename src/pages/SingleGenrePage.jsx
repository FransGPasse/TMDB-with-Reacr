import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";

import { useSearchParams, useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const SingleGenrePage = () => {
  /* Finds the ID from the URL */
  const { id } = useParams();

  /* Uses searchParams to set the default page to 1 */
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  /* Sets the variable "page" to the page from searchParams */
  const page = searchParams.get("page");

  /*   Calls getSingleGenre from the API-page */
  const { data, isSuccess, isError, isLoading } = useQuery(
    ["genres", page, id],
    MovieAPI.getSingleGenre
  );

  /* Returns a container with a header */
  return (
    <div className="flex flex-col items-center justify-center">
      {/* If the response is loading... */}
      {isLoading && <LoadingSpinner />}

      {/* If the request returns an error... */}
      {isError && (
        <h2 className="text-3xl text-gray-800 mt-16">
          Something went wrong...
        </h2>
      )}

      {/* If request is successful... */}
      {isSuccess && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {/* And a generic card component with the data from the simple custom hook as props*/}
          <MovieCard data={data.results} />
        </div>
      )}

      {/* Pagination that receives props from the data in the response */}
      {isSuccess && (
        <Pagination
          page={page}
          totalPages={data.total_pages}
          turnPage={setSearchParams}
        ></Pagination>
      )}
    </div>
  );
};

export default SingleGenrePage;
