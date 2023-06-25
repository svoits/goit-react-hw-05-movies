import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useRef, useState } from 'react';
import { getMoviesByQuery } from 'services/movieAPI';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getMovieInfo = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const movies = await getMoviesByQuery(query, abortCtrl.current.signal);

        if (movies.length === 0) {
          return toast.info('Sorry, no movies for your query...', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        setMovies(movies);
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
  }, [query]);

  const onQueryChange = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setError(null);
  };

  return (
    <>
      <ToastContainer autoClose={2500} />
      <Searchbar onQueryChange={onQueryChange} />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      {!isLoading && movies.length > 0 && <MoviesList movieItems={movies} />}
    </>
  );
};

export default Movies;
