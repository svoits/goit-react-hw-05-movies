import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BiSolidMoviePlay, BiSolidHome } from 'react-icons/bi';
import {
  StyledLink,
  Header,
  LinksList,
  Container,
  Main,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <LinksList>
              <li>
                <StyledLink to="/">
                  <BiSolidHome />
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">
                  <BiSolidMoviePlay />
                  Movies
                </StyledLink>
              </li>
            </LinksList>
          </nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default SharedLayout;
