import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI";

const useTopRated = () => {
  return useQuery("top_rated", MovieAPI.getTopRated);
};

export default useTopRated;
