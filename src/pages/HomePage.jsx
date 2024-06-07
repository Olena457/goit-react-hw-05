import { Blocks } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../apiService/movies';
import MovieList from '../components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchTrendMovies();

      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <Blocks
          height="70"
          width="70"
          color="#00ffff"
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
