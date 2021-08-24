import styled, {css} from "styled-components/macro";
import {ProgresWrapper} from "../CircularProgressBar/style";

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  ${ProgresWrapper} {
    position: absolute;
    transform: translate(15px, -20px);
  }

  ${({isWatchList}) => isWatchList &&
          css`
            justify-content: center;
          `}
`;

export const MovieCard = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 5px;
  cursor: pointer;
  height: 400px;
  margin: 0 10px 10px;
  width: 195px;
`;

export const Poster = styled.div`
  align-items: center;
  background-color: #DBDBDB;
  border-radius: 10px 10px 0 0;
  display: flex;
  height: 300px;
  justify-content: center;
  position: relative;
  width: 195px;
`;

export const MoviePoster = styled.img`
  border-radius: 10px 10px 0 0;
  height: 300px;
  width: 195px;

  ${({notFound}) => notFound &&
          css`
            width: 50px;
          `}
`;

export const MovieTitle = styled.div`
  font-weight: 700;
  height: 40px;
  overflow: hidden;
  padding: 20px 0 7px 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 190px;
`;

export const MovieRate = styled.div`

`;

export const MovieRelease = styled.span`
  padding: 0 0 7px 7px;
`;

export const LoadMoreButton = styled.button`
  align-items: center;
  background-color: #01B4E4;
  border: 0;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  height: 50px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const MovieNotFound = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
`;
