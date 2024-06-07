import axios from 'axios';
const TOKEN_AUTHOR =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGI5ZWRmYmJlODQyNWI2Y2QxZjQzZjRjZmVkYmEzNSIsInN1YiI6IjY2NjIxNjRjNDk0YTFhY2U0MzdlN2JkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WGkEN3yWb0C08gYU9ihxRacM8Eg9VYRhbEfzjF94wg ';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = TOKEN_AUTHOR;

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('3/trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
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
