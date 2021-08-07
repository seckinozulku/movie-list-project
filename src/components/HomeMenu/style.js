import styled from 'styled-components/macro'
import {Link} from "react-router-dom";

export const Navbar = styled.div`
  width: 100%;
  background-color: #41729F;
  margin: 0;
  padding: 0 90px;
  color: white;
  position: fixed;
  height: 90px;
  top: 0;
  z-index: 1000;
`

export const List = styled.ul`
  display: inline-flex;
  width: 100%;
  list-style-type: none;
  justify-content: left;
  padding: 0;
`

export const ListItem = styled.li`
  padding: 15px;
  font-weight: bold;
  font-size: 22px;
  
  :first-child {
    padding-left: 0;
  }
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;

  :hover {
    color: gray;
  }
`
