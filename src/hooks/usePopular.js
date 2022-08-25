import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI";

const usePopular = () => {
  return useQuery("popular", MovieAPI.getPopularMovies);
};

export default usePopular;
