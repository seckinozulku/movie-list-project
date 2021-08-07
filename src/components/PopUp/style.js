import styled from 'styled-components/macro'

export const PopUpWrapper = styled.div`
  position: fixed;
`;

export const CloseButton = styled.button`
  float: right;
  border: none;
  background: none;
  font-size: 26px;
  cursor: pointer;
`;

export const BackgroundImage = styled.img`
  width: 800px;
  height: 450px;
`;

export const BackgroundOverlay = styled.div`
  width: 800px;
  height: 450px;
  position: absolute;
  z-index: 1000;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
`

export const BackgroundPoster = styled.img`
  z-index: 1001;
  position: absolute;
  width: 300px;
  height: 450px;
`

export const BackMovieTitle = styled.div `
  z-index: 1002; 
 text-align: center;
`

export const BackOverview = styled.div `

`