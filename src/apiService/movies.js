import axios from 'axios';
const TOKEN_AUTHOR =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGEwZmZlMzA5NTRmZjQ4ZDljNDRhMDk2YWRmNjU0YiIsInN1YiI6IjY2NjIxNjRjNDk0YTFhY2U0MzdlN2JkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lMxP3Mh-z8B2UUV3ndtvQmBSFdBImOb4RiSvRRER3N0';

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
