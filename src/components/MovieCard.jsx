import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  if (!data.length) {
    return <h1>No data</h1>;
  }

  return (
    <>
      {data.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="bg-gray-900 max-w-xs p-3 m-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          ></img>
          <div className="text-white text-center">
            <h1 className="text-3xl m-2">{movie.title}</h1>
            <ul className="space-y-3">
              <li>
                Avg. score:{" "}
                <span className="text-cyan-300">{movie.vote_average}</span> from{" "}
                {movie.vote_count} reviews
              </li>
              <hr />
              <li>Release date: {movie.release_date}</li>
              <hr />
              <h3 className="hover:text-cyan-300 underline">Read more...</h3>
            </ul>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MovieCard;
