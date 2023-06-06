import React, {useState} from 'react';
import Validation from "./LoginValidation";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (Object.keys(errors).length === 0) {
            axios.post('http://localhost:3042/login', values)
                .then(res => {
                    if (res.data === 'Success') {
                        navigate('/adminPanel');
                    } else {
                        alert('Invalid Username or password');
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='background'>
            <div className="admin-login">
                <h2 className='admin-login-heading'>Admin Login</h2>
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <input
                        className='text-box'
                        type="text"
                        placeholder="Enter Username"
                        name='username'
                        onChange={handleInput}/>
                    <span>{errors.username && <p>{errors.username}</p>}</span>
                    <input
                        className='text-box'
                        type="password"
                        placeholder="Enter Password"
                        name='password'
                        onChange={handleInput}/>
                    <span>{errors.password && <p>{errors.password}</p>}</span>
                    <button className="login-btn" type="submit">Login</button>
                    <p> Forgot Password? <a href=''>Click here</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;