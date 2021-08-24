import {useState} from "react";
import {ErrorMessage, Form, FormButton, FormInput, FormTitle, LoginFormWrapper, Logo} from "./style";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
	const history = useHistory();
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const [errorMessage , setErrorMessage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("userData.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const isUserMatched = data.find(
					(usr) =>
						usr.email === values.email &&
                        usr.password === values.password
				);
				if (isUserMatched) {
					localStorage.setItem("isLoggedIn", JSON.stringify(true));
					localStorage.setItem("user", JSON.stringify(isUserMatched));
					history.push("/");
				} else {
					setErrorMessage("Login Failed");
					setTimeout(()=>{
						setErrorMessage(null);
					}, 2000);
				}
			});
	};

	return (
		<>
			<Logo src="./logo.png" alt="Logo"/>
			<LoginFormWrapper>
				<FormTitle>
					Sing In
				</FormTitle>

				<Form onSubmit={handleSubmit}>
					<FormInput onChange={(e) => setValues({...values, email: e.target.value})} placeholder={"E-mail"}
						type="text" name="email"/>
					<FormInput onChange={(e) => setValues({...values, password: e.target.value})}
						placeholder={"Password"} type="password" name="password"/>
					<FormButton>Login</FormButton>
				</Form>
			</LoginFormWrapper>
			{errorMessage && <ErrorMessage>
				{errorMessage}
			</ErrorMessage>}
		</>
	);
};

export default LoginForm;
