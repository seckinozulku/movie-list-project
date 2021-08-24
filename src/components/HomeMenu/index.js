import {Navbar, List, ListItem, MenuLink, Login, Profile, DropdownMenu, ExitButton} from "./style";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Logo} from "../Filters/style";

const Menu = () => {
	const isLoggedIn = localStorage.getItem("isLoggedIn");
	const user = JSON.parse(localStorage.getItem("user"));
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const history = useHistory();

	const openDropMenu = () => {
		setIsDropDownOpen(!isDropDownOpen);
	};

	const exitButton = () => {
		localStorage.removeItem("user");
		localStorage.setItem("isLoggedIn", "false");
		history.push("/login");
	};

	const handleOutsideClick = (e) => {
		e.stopPropagation();
		openDropMenu();
	};

	useEffect(() => {
		document.addEventListener("click", () => setIsDropDownOpen(false));
		return () => {
			document.removeEventListener("click", () => setIsDropDownOpen(false));
		};
	}, []);


	const refreshPage = () =>{
		if (window.location.pathname === "/") {
			window.location.reload();
		} else {
			history.push("/");
		}

	};
	return (
		<Navbar>
			<List>
				<ListItem>
					<MenuLink to={"/"} onClick={ refreshPage }>
						<Logo src="./logo.png" alt="Logo"/>
					</MenuLink>
				</ListItem>
				<ListItem>
					<MenuLink to={"/watched"} isActive={window.location.pathname === "/watched"}>Watched</MenuLink>
				</ListItem>
				<ListItem>
					<MenuLink to={"/watch-list"} isActive={window.location.pathname === "/watch-list"}>Watch List </MenuLink>
				</ListItem>
			</List>

			{isLoggedIn ?
				<Profile onClick={(e) => handleOutsideClick(e)}>{user?.firstName?.charAt(0)}</Profile> :
				<Login>
					<MenuLink to={"/login"}> Login </MenuLink>
				</Login>
			}

			{isDropDownOpen && (
				<DropdownMenu>
					{user?.firstName} {user?.lastName}
					<ExitButton onClick={exitButton}>Çıkış Yap</ExitButton>
				</DropdownMenu>
			)}
		</Navbar>
	);
};

export default Menu;
