import styled from 'styled-components/macro'
import {ProgresWrapper} from "../CircularProgressBar/style";

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;

  ${ProgresWrapper} {
    position: absolute;
    transform: translate(15px, -20px);
  }
`


export const MovieCard = styled.div`
  margin: 10px;
  width: 195px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 5px;
  border-radius: 10px;
  height: 400px;
`

export const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px 10px 0 0 ;
`

export const MovieTitle = styled.div`
  font-weight: 700;
  padding: 20px 0 7px 7px;
  height: 40px; 
  display: flex;
  align-items: center;
`

export const MovieRate = styled.div`

`

export const MovieRelease = styled.span`
  padding: 0 0 7px 7px;
`