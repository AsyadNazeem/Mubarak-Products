import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:877/login", {email, password})
            .then((result) => {
                console.log(result);
                if (result.data.message === "Login Success") {
                    navigate("/adminPanel");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="background">
            <div className="admin-login">
                <h2 className="admin-login-heading">Admin Login</h2>
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <input
                        className="text-box"
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/*{errors?.email ? (*/}
                    {/*  <span className="errors"> {errors.email} </span>*/}
                    {/*) : null}*/}
                    <input
                        className="text-box"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/*{errors?.password ? (*/}
                    {/*    <span className="errors"> {errors.password} </span>*/}
                    {/*) : null}*/}
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                    <p>
                        Forgot Password? <a href="">Click here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
