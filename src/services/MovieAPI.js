import axios from "axios";

//This is the base URL where we'll send our requests...
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//And this is my API key
const API_KEY = import.meta.env.VITE_API_KEY;

//String to exclude adult content
const noAdult = "&include_adult=false";

//String to get actor credits with the single movie-request
const moreInfo = "&append_to_response";

//String to get genres with the discover movies-request
const withGenres = "&with_genres";

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

//GETs the movies currently showing at the cinema
const getMovieGenres = () => {
  return get(`${axios.defaults.baseURL}/genre/movie/list${API_KEY}${noAdult}`);
};

const getSingleGenre = ({ queryKey }) => {
  const [_key, id] = queryKey;

  return get(
    `${axios.defaults.baseURL}/discover/movie${API_KEY}${noAdult}${withGenres}=${id}`
  );
};

const exports = {
  getPopularMovies,
  getNowPlaying,
  getSingleMovie,
  getMovieGenres,
  getSingleGenre,
};

export default exports;
