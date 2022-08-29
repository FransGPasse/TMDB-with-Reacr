import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieAPI from "../services/MovieAPI";
import MovieCard from "../components/MovieCard";
import { Link, NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

//The page for the 20 highest rated movies
const TopRatedPage = () => {
  /* Uses searchParams to set the default page to 1 */
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  /* Sets the variable "page" to the page from searchParams */
  const page = searchParams.get("page");

  /* Calls the getTopRated function from the Movie API and sets the query key as popular and the page to the afformentioned page variable */
  const { data, isSuccess, isError, isLoading } = useQuery(
    ["top_rated", { page }],
    MovieAPI.getTopRated
  );

  //Returns a container with a header
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      {isLoading && <LoadingSpinner />}

      {isError && <h2>Something went wrong...</h2>}

      <div className="flex space-x-4 m-auto">
        <Link
          as={NavLink}
          end
          to="/now_playing"
          className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
        >
          Now playing
        </Link>
        <Link
          as={NavLink}
          end
          to="/popular"
          className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
        >
          Popular
        </Link>
        <p className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl outline-cyan-400 outline outline-4">
          Top rated
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {/* And a generic card component with the data from the simple custom hook as props*/}
        {isSuccess && <MovieCard data={data.results} />}
      </div>

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

export default TopRatedPage;
