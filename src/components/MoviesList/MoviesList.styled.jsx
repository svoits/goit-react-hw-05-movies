import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledItem = styled.li`
  background-color: #fde2f3;
  border-radius: 7px;
  overflow: hidden;
  width: 300px;

  transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const StyledLink = styled(Link)`
  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  min-height: 450px;
`;

export const MovieName = styled.p`
  padding: 10px;
  font-weight: 500;
`;
