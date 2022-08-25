import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";

import { useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";

const SingleMoviePage = () => {
  const { id } = useParams();

  //Calls getSingleMovie from the API-page
  const {
    data: movie,
    isError,
    isLoading,
  } = useQuery(["movie", id], MovieAPI.getSingleMovie);

  return (
    <>
      {isError && <h2>Something went wrong...</h2>}

      {isLoading && <LoadingSpinner />}

      {movie && (
        <div className="flex flex-col text-white text-center">
          <div className="bg-gray-900 p-2 m-2 rounded-2xl">
            <h1 className="text-4xl m-4">{movie.title}</h1>

            <div className="overflow-hidden">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                className="m-auto max-w-xs lg:max-w-md transition-all duration-300 hover:scale-105"
              ></img>
            </div>
            <p className="p-5 italic text-white/80 hover:text-white transition-all duration-300 hover:cursor-default">
              "{movie.overview}"
            </p>

            <ul className="space-y-5 p-3">
              <li>
                Original title:{" "}
                <span className="italic">{movie.original_title}</span>
              </li>
              <li>Release date: {movie.release_date}</li>
              <p>Genres:</p>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            {/* Actors */}

            {movie.credits.cast.map((actor) => (
              <div key={actor.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + actor.profile_path}
                  style={{ width: "10vw", margin: "auto" }}
                ></img>
                <h3>
                  {actor.name} as {actor.character}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
