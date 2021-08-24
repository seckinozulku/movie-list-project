import styled, {css} from "styled-components/macro";
import {ProgresWrapper} from "../CircularProgressBar/style";

export const PopUpWrapper = styled.div`
  position: fixed;
  ${({isWatchList}) => isWatchList &&
          css`
            margin-left: 146px;
          `}
`;

export const BackgroundImage = styled.img`
  height: 550px;
  margin-left: 221px;
  width: 845px;

  ${({notFound}) => notFound &&
          css`
            background-color: #DBDBDB;
          `}

`;

export const MoviePoster = styled.img`
  height: 550px;
  width: 845px;

  ${({notFound}) => notFound &&
          css`
            width: 50px;
          `}
`;

export const BackgroundOverlay = styled.div`
  background-color: rgba(0, 0, 0, .9);
  height: 550px;
  margin-left: 221px;
  position: absolute;
  top: 0;
  width: 845px;
  z-index: 100;
`;

export const Poster = styled.div`
  align-items: center;
  background-color: #DBDBDB;
  display: flex;
  height: 550px;
  justify-content: center;
  margin: -20px -165px;
  width: 380px;
`;

export const BackMovieTitle = styled.h1`
  color: white;
  margin-bottom: 0;
`;


export const BackOverview = styled.div`
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  padding-top: 55px;
`;

export const InfoWrapper = styled.div`
  color: white;
  display: flex;
  padding: 20px 0;
`;

export const InfoText = styled.div`
  padding: 0 3px;

  &:not(:last-child):after {
    content: ",";
  }
`;

export const DateText = styled.div`

`;

export const Language = styled.div`
  margin-left: 3px;
  text-transform: uppercase;

  &:after {
    content: '\\2022';
    padding: 0 8px;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 101;

`;

export const ContentWrapper = styled.div`
  height: fit-content;
  margin-left: 225px;
  width: 65%;

  ${ProgresWrapper} {
    padding: 0 0 0 7px;
    transform: scale(1.5);
  }
;
`;

export const WatchListAdd = styled.div`
  align-items: center;
  background-color: #032541;
  border: 0;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 25px;
  height: 40px;
  justify-content: center;
  margin-right: 30px;
  width: 40px;

  ${({disabled}) => disabled &&
          css`
            color: red;
            font-size: 30px;
          `}
`;

export const WatchButtons = styled.div`
  display: flex;
  margin: -5px 0 0 75px;
`;