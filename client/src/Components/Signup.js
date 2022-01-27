import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Signup({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        fetch("api/signup", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                    setFormData({
                        full_name: "",
                        email: "",
                        username: "",
                        password: ""
                    })
                    window.location.reload(false)
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    };
    return (
        <div className="outer">
            <div className="inner">

        <div className="formContainer">
            {/* <h1>NOT LOGGED IN</h1> */}
            <form onSubmit={handleSubmit} className="form">
                <h1>Create Account</h1>
                <label>
                    Full Name:
                    <input
                        className="form-control"
                        name="full_name"
                        type="text"
                        value={formData.full_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Email:
                    <input
                        className="form-control"
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Username:
                    <input
                        className="form-control"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Password:
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <br></br>
                <button type="submit"  className="btn btn-dark btn-lg btn-block">Sign Up</button>
            </form>
        </div>
            </div>

        </div>
    );
}

export default Signup;
