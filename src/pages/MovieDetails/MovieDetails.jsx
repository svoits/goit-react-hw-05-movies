import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { BsPeople, BsChatLeftText } from 'react-icons/bs';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'services/movieAPI';
import {
  StyledLink,
  MovieContainer,
  InfoContainer,
  Overview,
  GenresList,
  Genre,
  AdditionalInfo,
  AddInfoList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovieInfo = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const movieDetails = await getMovieDetails(
          movieId,
          abortCtrl.current.signal
        );
        setMovieInfo(movieDetails);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getMovieInfo();
  }, [movieId]);

  const {
    title,
    release_date,
    overview,
    genres,
    poster_path,
    original_title,
    vote_average,
  } = movieInfo || {};

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      {!isLoading && movieInfo && (
        <>
          <StyledLink to={backLinkHref}>
            <FaArrowLeft />
            Go back
          </StyledLink>
          <div>
            <MovieContainer>
              <img
                width="300px"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.jp/300x450.png`
                }
                alt={original_title}
              />
              <InfoContainer>
                <h1>
                  {title} ({release_date.slice(0, 4)})
                </h1>
                <p>User score: {Math.floor(vote_average * 10)}%</p>
                <h2>Overview</h2>
                <Overview>{overview}</Overview>
                <h2>Genres</h2>
                <GenresList>
                  {genres?.map(genre => (
                    <Genre key={genre.id}>{genre.name}</Genre>
                  ))}
                </GenresList>
              </InfoContainer>
            </MovieContainer>
            <AdditionalInfo>Additional information</AdditionalInfo>
            <AddInfoList>
              <li>
                <StyledLink to="cast" state={{ ...location.state }}>
                  <BsPeople />
                  Cast
                </StyledLink>
              </li>
              <li>
                <StyledLink to="reviews" state={{ ...location.state }}>
                  <BsChatLeftText />
                  Reviews
                </StyledLink>
              </li>
            </AddInfoList>
          </div>
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
