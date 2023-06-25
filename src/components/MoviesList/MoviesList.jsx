import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledList,
  StyledLink,
  MovieName,
  StyledItem,
  StyledImg,
} from './MoviesList.styled';

const MoviesList = ({ movieItems }) => {
  const location = useLocation();

  const chooseURL = id => {
    return location.pathname === '/movies' ? `${id}` : `movies/${id}`;
  };

  return (
    <StyledList>
      {movieItems.map(({ poster_path, id, title }) => {
        return (
          <StyledItem key={id}>
            <StyledLink to={chooseURL(id)} state={{ from: location }}>
              <StyledImg
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.jp/300x450.png`
                }
                alt=""
                width="300"
              />
              <MovieName>{title}</MovieName>
            </StyledLink>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

MoviesList.propTypes = {
  movieItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
