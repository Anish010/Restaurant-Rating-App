import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import NavBarMenu from "./NavBarMenu"
const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function login() {


        fetch("http://localhost:3000/login?q=" + name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                    console.warn(navigate('/'))
                }
                else {
                    alert("Please check username and password")
                }

            })
        })


    }
    return (
        <div>
            <NavBarMenu />
            <br /><h2>Please Login !</h2><br />
            <input className="input-login" type="text"
                placeholder="enter name"
                name="user" onChange={(event) => setName(event.target.value)} /> <br /> <br />
            <input className="input-login"
                placeholder="enter password"
                type="password" name="password" onChange={(event) => setPassword(event.target.value)} /> <br /> <br />
            <Button className="button-login" onClick={() => { login() }} >Login</Button>{' '}
            <br /><br />
            <Button className="button-signup" onClick={() => { navigate('/signup') }}> SignUp</Button>{' '}

        </div >
    );
};

export default Login;