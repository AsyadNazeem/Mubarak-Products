import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Validate from "./SignupValidation";

function Signup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:877/signup", {username, email, password})
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="background">
            <div className="admin-signing">
                <h2 className="admin-login-heading">Admin Signup</h2>
                <form action="" className="signup-form" onSubmit={handleSubmit}>
                    <input
                        className="text-box"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    {/*{errors?.username ? (*/}
                    {/*    <span className="errors"> {errors.username} </span>*/}
                    {/*) : null}*/}
                    <input
                        className="text-box"
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/*{errors?.email ? (*/}
                    {/*    <span className="errors"> {errors.email} </span>*/}
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
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
