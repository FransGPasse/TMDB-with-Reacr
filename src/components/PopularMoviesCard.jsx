import Card from "react-bootstrap/Card";

const PopularMoviesCard = ({ popular_movies }) => {
  if (!popular_movies.length) {
    return <h1>No data</h1>;
  }

  return (
    <>
      {popular_movies.map((movie) => (
        <Card key={movie.id} className="my-2 p-3">
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            style={{ width: "10rem" }}
          ></Card.Img>
          <h1>{movie.title}</h1>
          <div className="text-small text-muted">
            Original title: {movie.original_title}
          </div>
          <div className="text-small text-muted">
            Release date: {movie.release_date}
          </div>
        </Card>
      ))}
    </>
  );
};

export default PopularMoviesCard;
