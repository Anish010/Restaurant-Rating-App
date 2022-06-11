import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavBarMenu from "./NavBarMenu"
const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    function register() {

        fetch("http://localhost:3000/login",
            {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password, email })
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Account Created !");
                })
            })
    }
    return (
        <>
            <div>
                <NavBarMenu />
                <br /><h2>Please Sign Up !</h2><br />
                <div>
                    <input className="input-create" placeholder=" Name" /> <br /><br />
                    <input className="input-create" type="email" onChange={(event) => { setEmail(event.target.value) }}
                        placeholder="Email" /> <br /><br />
                    <input className="input-create" type="text" onChange={(event) => { setName(event.target.value) }}
                        placeholder="Ussername" /> <br /><br />
                    <input className="input-create" type="password" onChange={(event) => { setPassword(event.target.value) }}
                        placeholder="Password" /> <br /><br />
                    <Button className="button-signup" onClick={() => { register() }}> SignUp</Button>{' '}
                    <br /><br />
                    <Button className="button-login" onClick={() => { navigate('/login') }}>Back to Login</Button>{' '}
                </div>
            </div>
        </>
    );
}

export default SignUp;