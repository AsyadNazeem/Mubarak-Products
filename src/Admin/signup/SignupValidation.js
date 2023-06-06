export default function Validation(values){
    let error = {};
    const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    if(values.username === ""){
        error.username = "Username is required";
    }else if (values.username.length < 3){
        error.username = "Username must be more than 3 characters";
    }else if (values.username.length > 15){
        error.username = "Username must be less than 15 characters";
    }

    if (!email_pattern.test(values.email)){
        error.email = "Email is invalid";
    }else if(values.email === ""){
        error.email = "Email is required";
    }else if(!email_pattern.test(values.email)){
        error.email = "Email is invalid";}

    if(values.password === ""){
        error.password = "Password is required";
    }else if (values.password.length < 6){
        error.password = "Password must be more than 6 characters";
    }else if (values.password.length > 15){
        error.password = "Password must be less than 15 characters";
    }else if(!password_pattern.test(values.password)){
        error.password = "Password must contain at least one uppercase, one lowercase, one number and one special character";
    }
}

// Compare this snippet from Front-End/src/Admin/Signup.js: