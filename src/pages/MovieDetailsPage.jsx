import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { fetchMoviesById } from '../apiService/movies';
import css from '../pages/MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const locationRef = useRef(location.state || '/');

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMoviesById(movieId);

      setMovie(movieData);
    };

    fetchMovie();
  }, [movieId]);

  const getUserScore = value => {
    const userScore = Math.round(value * 10);

    return userScore;
  };

  return (
    <>
      {!movie ? (
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      ) : (
        <div className="container">
          <button
            className={css.but}
            onClick={() => navigate(locationRef.current)}
          >
            Go back
          </button>
          <div className={css.WrapperImg}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              width={300}
            />
            <div className={css.wrapperContent}>
              <h2>{`${movie.original_title} (${movie.release_date.slice(
                0,
                4
              )})`}</h2>
              <p>{`User score: ${getUserScore(movie.vote_average)}%`}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={css.listJenres}>
                {movie.genres.map(genre => (
                  <li className={css.genre} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className={css.more}>More informations</p>
          <ul className={css.listInfo}>
            <Link to={`/movies/${movieId}/cast`} state={locationRef.current}>
              Cast
            </Link>
            <Link to={`/movies/${movieId}/reviews`} state={locationRef.current}>
              Reviews
            </Link>
          </ul>
          <Suspense
            fallback={
              <Blocks
                height="70"
                width="70"
                color="#ff0000c0"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default MovieDetailsPage;
