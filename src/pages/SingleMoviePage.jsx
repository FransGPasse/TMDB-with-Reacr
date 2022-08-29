import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";
import placeholderImg from "../assets/placeholder.png";

const SingleMoviePage = () => {
  //Gets the id from the URL
  const { id } = useParams();

  //Calls getSingleMovie from the API-page
  const {
    data: movie,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(["movie", id], MovieAPI.getSingleMovie);

  return (
    <>
      {isError && <h2>Something went wrong...</h2>}

      {isLoading && <LoadingSpinner />}

      {isSuccess && (
        <div className="flex-col bg-gray-900 p-2 m-2 rounded-2xl  text-white text-center">
          <h1 className="text-4xl m-4">{movie.title}</h1>

          <div className="flex-col">
            <div className="overflow-hidden">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                className="m-auto max-w-xs lg:max-w-md transition-all duration-300 hover:scale-105"
              ></img>
            </div>
            <p className="p-5 italic text-white/80 hover:text-white transition-all duration-300 hover:cursor-default">
              "{movie.overview}"
            </p>
          </div>

          <ul className="space-y-5 p-3">
            <li className="text-xl">
              Original title:{" "}
              <span className="italic">{movie.original_title}</span>
            </li>
            <li className="text-xl">Release date: {movie.release_date}</li>
            <h2 className="text-3xl">Genres:</h2>
            <div className="flex items-center justify-center space-x-6">
              {movie.genres.map((genre) => (
                <Link
                  to={`/genres/${genre.id}`}
                  key={genre.id}
                  className="mb-10 underline transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300 hover:no-underline"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </ul>

          {/* Actors */}
          <h2 className="text-3xl mb-2">Appearances: </h2>
          <div className="flex overflow-scroll">
            {movie.credits.cast.map((actor) => (
              <Link to={`/person/${actor.id}`} key={actor.id}>
                <div
                  key={actor.id}
                  className="bg-cyan-400 p-2 m-2 w-40 rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={
                      actor.profile_path
                        ? "https://image.tmdb.org/t/p/w500" + actor.profile_path
                        : placeholderImg
                    }
                    className="w-max"
                  ></img>
                  {actor.name} as{" "}
                  <span className="italic">{actor.character}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
