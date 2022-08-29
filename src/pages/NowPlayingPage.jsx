import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard from "../components/MovieCard";
import { Link, NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";
import Pagination from "../components/Pagination";

const NowPlayingPage = () => {
  /* Uses searchParams to set the default page to 1 */
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  /* Sets the variable "page" to the page from searchParams */
  const page = searchParams.get("page");

  /* Calls the getNowPlaying function from the Movie API and sets the query key as popular and the page to the afformentioned page variable */
  const { data, isSuccess, isError, isLoading } = useQuery(
    ["now_playing", { page }],
    MovieAPI.getNowPlaying
  );

  //Returns a container with a three buttons to choose between filters
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <div className="flex space-x-4 m-auto">
        <p className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl outline-cyan-400 outline outline-4">
          Now playing
        </p>
        <Link
          as={NavLink}
          end
          to="/popular"
          className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
        >
          Popular
        </Link>
        <Link
          as={NavLink}
          end
          to="/top_rated"
          className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
        >
          Top rated
        </Link>
      </div>

      {/* Adding a loading animation from React spinners*/}
      {isLoading && <LoadingSpinner />}

      {isError && (
        <h2 className="text-3xl text-gray-800 mt-16">
          Something went wrong...
        </h2>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {/* And renders a generic card component with the data from the simple custom hook as props when we receive the isSuccess-callback function */}
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

export default NowPlayingPage;
