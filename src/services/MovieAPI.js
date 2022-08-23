import axios from "axios";

//This is the base URL where we'll send our requests...
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//And this is my API key
const API_KEY = import.meta.env.VITE_API_KEY;

//String for more information for every request
const moreInfo = "&append_to_response";

//String to exclude adult content
const noAdult = "&include_adult=false";

//Standard GET request that returns the data from the response
const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return response.data;
};

//GETs the popular movies
const getPopularMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}${noAdult}`);
};

//GETs the movies currently showing at the cinema
const getNowPlaying = () => {
  return get(`${axios.defaults.baseURL}/movie/now_playing${API_KEY}${noAdult}`);
};

//GETs the movie with the corresponding ID
const getSingleMovie = ({ queryKey }) => {
  const [_key, id] = queryKey;

  return get(
    `${axios.defaults.baseURL}/movie/${id}${API_KEY}${moreInfo}=credits`
  );
};

const exports = {
  getPopularMovies,
  getNowPlaying,
  getSingleMovie,
};

export default exports;
