import { Link, useParams } from "react-router-dom";

const MovieCard = ({ data }) => {
  /*   const { id } = useParams(); */

  if (!data.length) {
    return <h1>No data</h1>;
  }

  return (
    <>
      {data.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className="" style={{ width: "40%" }}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            ></img>
            <h1>{movie.title}</h1>
            <ul>
              <li>Average score: {movie.vote_average}</li>
              <li>Release date: {movie.release_date}</li>
            </ul>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MovieCard;
