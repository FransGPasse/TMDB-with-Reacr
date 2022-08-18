import axios from "axios";

//This is the base URL where we'll send our requests...
axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

//And this is my API key
const API_KEY = "?api_key=1e529bfdc83c25eb3c6c0c142ba53ea5&language=en-US";

//Standard GET request that returns the data from the response
const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return response.data.results;
};

//GETs the popular movies
const getPopularMovies = () => {
  return get(`${axios.defaults.baseURL}/popular${API_KEY}`);
};

//GETs the movies currently showing at the cinema
const getNowPlaying = () => {
  return get(`${axios.defaults.baseURL}/now_playing${API_KEY}`);
};

const exports = {
  getPopularMovies,
  getNowPlaying,
};

export default exports;
