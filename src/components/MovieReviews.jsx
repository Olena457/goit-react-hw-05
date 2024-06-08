import { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../apiService/movies';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [showMore, setShowMore] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsData = await fetchReviewsById(movieId);

      setReviews(reviewsData);
    };

    fetchReviews();
  }, [movieId]);

  const showFullReview = reviewId => {
    setShowMore(reviewId);
  };

  return (
    <>
      {!reviews ? (
        <Blocks
          height="80"
          width="80"
          color=" #ff0000c0"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      ) : (
        <>
          {reviews.length === 0 && (
            <p className={css.noReviews}>No reviews yet</p>
          )}
          {reviews.length > 0 && (
            <ul className={css.list}>
              {reviews.map(review => (
                <li key={review.id} className={css.item}>
                  <h3>{`Author: ${review.author}`}</h3>

                  {review.id === showMore ? (
                    <>
                      <p>{review.content}</p>
                    </>
                  ) : (
                    <>
                      <p>{`${review.content.slice(0, 500)} ...`}</p>
                      <span
                        className={css.points}
                        onClick={() => showFullReview(review.id)}
                      >
                        Show more
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}

export default MovieReviews;
