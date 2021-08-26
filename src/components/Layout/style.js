import styled, {css} from "styled-components/macro";
import {breakpoints} from "../../index";

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
          `};
  
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  };
`;

export const ContentWrapper = styled.div`
  padding: 10px;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
  };

  @media (min-width: ${breakpoints.web}) {
    width: 50%;
  };

  @media (min-width: ${breakpoints.wide}) {
    width: ${({size}) => `${size}%`};
  };
`;
