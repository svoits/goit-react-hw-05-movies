import { BiSolidHome } from 'react-icons/bi';
import { NFContainer, StyledHomeLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <NFContainer>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <StyledHomeLink to="/">
        <BiSolidHome />
        Back to Home
      </StyledHomeLink>
    </NFContainer>
  );
};

export default NotFound;
