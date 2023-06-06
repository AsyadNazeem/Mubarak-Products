export default function Validation(values) {
    let errors = {}
    if (!values.username) {
        errors.username = 'Username is required'
    } else if (values.username.length < 3) {
        errors.username = 'Username must be more than 3 characters'
    } else if (values.username.length > 15) {
        errors.username = 'Username must be less than 15 characters'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password must be more than 6 characters'
    }
    return errors;
}

