import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movieAPI';
import 'react-toastify/dist/ReactToastify.css';
import {
  AuthorTitle,
  ReviewText,
  ReviewsItem,
  ReviewsList,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    const getReviewInfo = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const reviewsInfo = await getReviews(movieId, abortCtrl.current.signal);

        if (reviewsInfo.length === 0) {
          return toast.info('Sorry, there are no reviews for this movie yet.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        setReviews(reviewsInfo);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getReviewInfo();
  }, [movieId]);

  return (
    <>
      <ToastContainer autoClose={2500} />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      {!isLoading && reviews.length > 0 && (
        <div>
          <ReviewsList>
            {reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <AuthorTitle>Author: {author}</AuthorTitle>
                <ReviewText>{content}</ReviewText>
              </ReviewsItem>
            ))}
          </ReviewsList>
        </div>
      )}

      {!isLoading && reviews.length === 0 && (
        <div>Sorry, there are no reviews for this movie yet.</div>
      )}
    </>
  );
};

export default Reviews;
