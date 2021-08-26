import styled from "styled-components/macro";
import {NavLink} from "react-router-dom";

export const Navbar = styled.div`
  align-items: center;
  background-color: #032541;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const List = styled.ul`
  align-items: center;
  display: inline-flex;
  justify-content: left;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 600;
  padding: 15px;

  :first-child {
    padding-left: 0;
  }
`;

export const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  
  &.active{
    color: #34DBD8;
  }
  
  &:hover {
    color: #A7F8C9;
    
  }
`;
export const Login = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-right: 40px;
`;

export const Profile = styled.div`
  align-items: center;
  background-color: #01B4E4;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: center;
  margin-right: 100px;
  min-height: 40px;
  min-width: 40px;
  text-transform: uppercase;
`;

export const DropdownMenu = styled.div`
  background-color: white;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 5px;
  color: black;
  display: block;
  margin-top: 10px;
  padding: 15px;
  position: absolute;
  right: 11px;
  text-align: center;
  top: 45px;
  width: 180px;
  z-index: 10002;

  &:before {
    background-color: white;
    bottom: 95%;
    content: "";
    height: 8px;
    left: 47%;
    position: absolute;
    transform: rotate(45deg);
    width: 8px;
  }
`;
export const ExitButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  width: 55%;
  :hover {
    color: #032541;
  };
  
`;
