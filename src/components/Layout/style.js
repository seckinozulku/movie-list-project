import styled, {css} from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: #032541;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  margin: 20px 40px 40px 40px;
  
  ${({withMenu}) => withMenu &&
          css`
            margin-top: 90px;
          `}
`;

export const ContentWrapper = styled.div`
  padding: 10px;
  width: ${({ size }) =>  `${size}%`};
`;
