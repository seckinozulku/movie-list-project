import {useState} from 'react';
import {Form, FormButton, FormInput, FormTitle, LoginFormWrapper} from "./style";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    const history = useHistory()
    const [values,setValues]=useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()

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
                console.log(isUserMatched)
                if (isUserMatched) {
                    localStorage.setItem("isLoggedIn", JSON.stringify(true))
                    localStorage.setItem("user", JSON.stringify(isUserMatched))
                    history.push("/")
                } else {
                    // Uyarı mesajı verilecek
                }
            });

    }
    return (
        <LoginFormWrapper>
            <FormTitle>
            Login Form
            </FormTitle>

            <Form onSubmit={handleSubmit}>
                <FormInput onChange={(e)=>setValues({...values,email:e.target.value})} placeholder={"E-mail"} type="text" name="email"/>
                <FormInput onChange={(e)=>setValues({...values,password:e.target.value})} placeholder={"Password"} type="password" name="password"/>
                <FormButton>Login</FormButton>

            </Form>

        </LoginFormWrapper>
    );
};

export default LoginForm;
