import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import SnowboardMan from './SnowboardMan';

function Login({ setCurrentUser }) {
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        fetch("api/login", {
            method: "POST",
            headers: { 'Content-Type': "application/json", },
            body: JSON.stringify(loginForm)
        }).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setCurrentUser(user)
                    navigate('/')
                })
            } else {
                r.json().then((errors) => {
                    alert("Something went wrong")
                })
            }
        })
    }
    return (
        <>
            <div className='outer'>
                <div className='inner'>

                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <h1>Welcome Back</h1>
                        <p>
                            <label htmlFor="username">Username </label>
                            <input
                                className='form-control'
                                type="text"
                                name="username"
                                value={loginForm.username}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="password">Password </label>
                            <input
                                className='form-control'
                                type="password"
                                name="password"
                                value={loginForm.password}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </p>
                        <p>
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Log In</button>
                        </p>
                        <p>Don't have an account?</p>
                        <p>
                            <Link to="/signup">Sign Up</Link>
                        </p>
                    </form>
                </div>
                </div>

            </div>
        </>
    )
}

export default Login