import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useParams } from "react-router-dom";

const MovieCard = ({ data }) => {
  /*   const { id } = useParams(); */

  if (!data.length) {
    return <h1>No data</h1>;
  }

  return (
    <>
      {data.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none" }}
          key={movie.id}
        >
          <Card
            className="m-2 p-2 text-white"
            style={{ width: "40%" }}
            bg="myBlue"
          >
            <Card.Img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              style={{ width: "25vw", margin: "auto" }}
            ></Card.Img>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Average score: {movie.vote_average}
                </ListGroup.Item>
                <ListGroup.Item>
                  Release date: {movie.release_date}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default MovieCard;
