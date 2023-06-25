import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 20px 0;
  background-color: #fde2f3;
`;

export const Main = styled.main`
  padding: 30px 0;
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
`;

export const LinksList = styled.ul`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  min-width: 100px;
  padding: 7px 10px;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 500;
  background-color: #e5beec;

  transition: transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    transform: scale(1.05);
    color: orangered;
    background-color: #2a2f4f;
  }

  &.active {
    background-color: #2a2f4f;
    color: orangered;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
