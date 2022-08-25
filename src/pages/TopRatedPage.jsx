import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import useTopRated from "../hooks/useTopRated";
import MovieCard from "../components/MovieCard";
import { Link, NavLink } from "react-router-dom";

//The page for the 20 highest rated movies
const TopRatedPage = () => {
  //Very simple custom hook that fetches the movies
  const { data, isError, isLoading } = useTopRated();

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
        {data && <MovieCard data={data.results} />}
      </div>
    </div>
  );
};

export default TopRatedPage;
