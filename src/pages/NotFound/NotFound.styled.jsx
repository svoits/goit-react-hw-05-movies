import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 0 20px;
  margin: 20px auto 0;
`;

export const StyledHomeLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  min-width: 150px;
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
