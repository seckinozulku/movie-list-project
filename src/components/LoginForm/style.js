import styled from "styled-components/macro";

export const Form = styled.form`

`;

export const FormInput = styled.input`
  background-color: #ECF0F1;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  height: 35px;
  margin: 10px 0;
  padding: 5px;
  width: 100%;
`;

export const FormButton = styled.button`
  background-color:#2DCC70;
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 10px 35px;
`;

export const LoginFormWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  margin: auto;
  padding: 20px;
  position: absolute;
  text-align: center;
  top: 250px;
  width: 25%;
`;

export const FormTitle = styled.h2`
`;

export const Logo = styled.img`
  height: auto;
  position: absolute;
  top: 120px;
  width: 320px;
`;

export const ErrorMessage = styled.div`
  align-items: center;
  background-color: white;
  border: 3px solid red;
  border-radius: 10px;
  color: red;
  display: flex;
  font-weight: bold;
  height: 50px;
  padding-left: 30px;
  position: absolute;
  right:0;
  top: 15px;
  width: 150px;


  &:before {
    content: '\\26A0';
    font-size: 20px;
    margin-bottom: 5px;
    padding: 5px;
  }
`;
