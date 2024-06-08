import { Blocks } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../apiService/movies';
import MovieList from '../components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchTrendingMovies();

      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <Blocks
          height="80"
          width="80"
          color="#ff0000c0"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      ) : (
        <div className="container">
          <h2>Trending today</h2>
          <MovieList movies={movies} />
        </div>
      )}
    </>
  );
}

export default HomePage;
