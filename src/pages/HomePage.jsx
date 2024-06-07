import { Blocks } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../apiService/movies';
import MovieList from '../components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(setMovies);
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <Blocks
          height="70"
          width="70"
          color="#00ffff"
          ariaLabel="blocks-loading"
          wrapperStyle={null}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      ) : (
        <div className="container">
          <h1>Trending movies today</h1>
          <MovieList movies={movies} />
        </div>
      )}
    </>
  );
}

export default HomePage;
