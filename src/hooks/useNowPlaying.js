import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI";

const useNowPlaying = () => {
  return useQuery("now_playing", MovieAPI.getNowPlaying);
};

export default useNowPlaying;
