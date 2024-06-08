import axios from 'axios';
const TOKEN_AUTHOR =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTU2ZDgxOGNhM2ViMzFiOWRmYzRkMjAzZjQxMWE4YyIsInN1YiI6IjY2NjIxNjRjNDk0YTFhY2U0MzdlN2JkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xlq4cUAvMPr2tMTRr04egKqtqkUfgGiDdZfihSLLESg';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN_AUTHOR}`;

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('3/trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
  console.log(data.results);
  return data.results;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(`3/movie/${id}`);
  return data;
};
export const fetchReviewsById = async id => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);
  return data.results;
};

export const fetchCreditsById = async id => {
  const { data } = await axios.get(`3/movie/${id}/credits`);
  return data;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios.get('3/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};
