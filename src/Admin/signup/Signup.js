import React, {useState} from "react";
import Validation from "./SignupValidation";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (Object.keys(errors).length === 0) {
            axios.post("http://localhost:3042/signup", values)
                .then((res) => {
                    if (res.data === "Success") {
                        navigate("login");
                    } else {
                        alert("Invalid username or password");
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='background'>
            <div className="admin-signing">
                <h2 className="admin-login-heading">Admin Signup</h2>
                <form action="" className="signup-form" onSubmit={handleSubmit}>
                    <input
                        className="text-box"
                        type="text"
                        placeholder="Enter Username"
                        name='username'
                        onChange={handleInput}/>
                    <span>{errors.username && <p> {errors.username} </p>}</span>
                    <input
                        className="text-box"
                        type="email"
                        placeholder="Enter Email"
                        name='email'
                        onChange={handleInput}/>
                    <span>{errors.email && <p> {errors.email} </p>}</span>
                    <input
                        className="text-box"
                        type="password"
                        placeholder="Enter Password"
                        name='password'
                        onChange={handleInput}/>
                    <span>{errors.password && <p> {errors.password} </p>}</span>
                    <button className="login-btn" type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
