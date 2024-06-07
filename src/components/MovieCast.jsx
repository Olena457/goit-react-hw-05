import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from '../apiService/movies';
import { Blocks } from 'react-loader-spinner';
import css from '/MovieCast.module.css';

function MovieCast() {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const { cast } = await fetchCreditsById(movieId);

      setCast(cast);
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {!cast ? (
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
        <ul className={css.list}>
          {cast.map(actor => (
            <li key={actor.id} className={css.item}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
                width={200}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieCast;
