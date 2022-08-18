import ListGroup from "react-bootstrap/ListGroup";

const PopularMoviesCard = ({ popular_movies }) => {
  if (!popular_movies.length) {
    return <h1>No data</h1>;
  }

  return (
    <ListGroup>
      {popular_movies.results.map((movie) => (
        <ListGroup.Item key={movie.id}>
          <h1>{movie.original_title}</h1>
          <div className="text-small"></div>
        </ListGroup.Item>
      ))}

      <h1>Hej Hej!</h1>
    </ListGroup>
  );
};

export default PopularMoviesCard;
