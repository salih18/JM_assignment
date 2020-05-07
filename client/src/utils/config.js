// Configuration for TMDB
// Website of the API here: https://developers.themoviedb.org/

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
};
