import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import MovieAPI from "../services/MovieAPI";
import { useQuery } from "react-query";
import placeholderImg from "../assets/placeholder.png";

const SingleMoviePage = () => {
  //Gets the id from the URL
  const { id } = useParams();

  //Calls getSinglePerson from the API-page and sets the data to person
  const {
    data: person,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(["person", id], MovieAPI.getSinglePerson);

  return (
    <>
      {isError && <h2>Something went wrong...</h2>}

      {isLoading && <LoadingSpinner />}

      {isSuccess && (
        <div className="flex-col bg-gray-900 p-2 m-2 rounded-2xl  text-white text-center">
          <h1 className="text-4xl m-4">{person.name}</h1>

          <div className="flex-col">
            <div className="overflow-hidden">
              <img
                src={"https://image.tmdb.org/t/p/w500" + person.profile_path}
                className="m-auto max-w-xs lg:max-w-md transition-all duration-300"
              ></img>
            </div>
            <p className="p-5 italic text-white/80 hover:text-white transition-all duration-300 hover:cursor-default">
              "{person.biography}"
            </p>
          </div>

          <ul className="space-y-5 p-3 text-2xl mb-4">
            <li>Born: {person.birthday}</li>
            <li>Birthplace: {person.place_of_birth}</li>
            {person.deathday && <li> Died: {person.deathday}</li>}
          </ul>

          {/* Credits */}
          <h2 className="text-3xl mb-2">Appearances: </h2>
          <div className="flex overflow-scroll">
            {person.movie_credits.cast.map((credit) => (
              <Link to={`/movie/${credit.id}`} key={credit.id}>
                <div className="bg-cyan-400 p-2 m-2 w-40 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={
                      credit.poster_path
                        ? "https://image.tmdb.org/t/p/w500" + credit.poster_path
                        : placeholderImg
                    }
                    className="m-auto w-max"
                  ></img>
                  <h2>
                    As {credit.character} in {credit.title}
                  </h2>
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
