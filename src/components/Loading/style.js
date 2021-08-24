import styled, {keyframes} from "styled-components/macro";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoadingBar = styled.div`
  -webkit-animation: ${spin} 2s linear infinite;
  align-items: center;
  animation: ${spin} 2s linear infinite;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  height: 40px;
  width: 40px;
`;
