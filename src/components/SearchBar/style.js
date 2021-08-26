import styled from "styled-components/macro";

export const SearchWrapper = styled.div`
  height: 35px;
  margin: 90px 40px 0 40px;
  position: relative;
`;

export const SearchInput = styled.input`
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  font-size: 15px;
  height: 35px;
  padding-left: 20px;
  position: absolute;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: #01B4E4;
  border: 0;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  height: 35px;
  position: absolute;
  right: 0;
  width: 150px;
`;
