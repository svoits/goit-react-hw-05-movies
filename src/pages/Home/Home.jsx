import { useEffect, useRef, useState } from 'react';
import { getTrending } from 'services/movieAPI';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    const getTrendingMovies = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const moviesData = await getTrending(abortCtrl.current.signal);
        setMovies(moviesData);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending movies today</h1>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && movies.length > 0 && <MoviesList movieItems={movies} />}
    </>
  );
};

export default Home;
