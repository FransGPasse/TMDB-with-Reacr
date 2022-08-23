import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";

import { useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";

const SingleMoviePage = () => {
  const { id } = useParams();

  //Kallar på getSingleMovie from MovieAPI
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
        <div>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            style={{ width: "40vw", margin: "auto" }}
          ></img>

          <h1>{movie.title}</h1>
          <h3>Original title: {movie.original_title}</h3>
          <h3>Release date: {movie.release_date}</h3>
          <ul>
            Genres:
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
      )}
    </>
  );
};

export default SingleMoviePage;
