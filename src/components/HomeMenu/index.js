import {Navbar, List, ListItem, MenuLink} from "./style";


const Menu = () => {
    return (
        <Navbar>
            <List>
                <ListItem>
                    <MenuLink to={"/"}> Home </MenuLink>
                </ListItem>
                <ListItem>
                    <MenuLink to={"/watched"}>Watched </MenuLink>
                </ListItem>
                <ListItem>
                    <MenuLink to={"/watch-list"}>Watch List </MenuLink>
                </ListItem>
                <ListItem>
                    <MenuLink to={"/profile"}> Profile </MenuLink>
                </ListItem>
            </List>
        </Navbar>
    );
};

export default Menu;