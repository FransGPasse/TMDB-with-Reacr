import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI";

const usePopular = () => {
  return useQuery("popular_movies", MovieAPI.getPopularMovies);
};

export default usePopular;
