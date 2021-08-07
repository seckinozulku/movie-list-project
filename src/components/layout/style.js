import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background-color: #41729F;
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  margin: 20px 40px 0 40px;
`

export const ContentWrapper = styled.div`
  width: ${({ size }) =>  `${size}%`};
`
