import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 85px;
  padding: 7px 10px;
  column-gap: 5px;

  border-radius: 5px;

  font-size: 16px;
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
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 15px 0;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
    flex-direction: row;
    row-gap: 0px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Overview = styled.p`
  line-height: 1.3;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Genre = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fde2f3;

  padding: 7px 10px;
  border-radius: 5px;
`;

export const AdditionalInfo = styled.h3`
  margin-bottom: 10px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;
