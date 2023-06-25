import Loader from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movieAPI';
import {
  CastList,
  CastItem,
  CharacterInfo,
  CharacterName,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    const getCastInfo = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const castInfo = await getCast(movieId, abortCtrl.current.signal);

        setCast(castInfo);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getCastInfo();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <CastList>
        {cast.map(({ id, profile_path, original_name, name, character }) => {
          return (
            <CastItem key={id}>
              <img
                width="200px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://placehold.jp/200x300.png`
                }
                alt={original_name}
              />
              <CharacterInfo>
                <CharacterName>{name}</CharacterName>
                <p>Character: {character}</p>
              </CharacterInfo>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
