const validate = (values) => {
    const errors = {};

    // Validate username
    if (!values.username) {
        errors.username = "Username is required";
    } else {
        errors.username = "";
    }

    // Validate email
    if (values.email === "") {
        errors.email = "Email is required"
    } else if (!isValidEmail(values.email)) {
        errors.email = "Email is invalid"
    } else {
        errors.email = ""
    }

    // Validate password
    if (values.password === "") {
        errors.password = "Password is required";
    } else if (!isValidPassword(values.password)) {
        errors.password = "Password didn't match";
    } else {
        errors.password = ""
    }
    return errors;
};

const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return emailPattern.test(email);
};

const isValidPassword = (password) => {
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordPattern.test(password);
};

export default validate;
