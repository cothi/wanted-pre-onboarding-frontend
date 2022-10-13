// form user info validation check
export function userValidation({ userInfo }) {
    const errors = {}
    const [email, password] = userInfo
    if (typeof email !== 'string' || !email.includes('@')) {
        errors.email = "That doesn't look like an email address"
    }

    if (typeof password !== 'string' || password.length <= 7) {
        errors.password = 'Password must be at least 8 characters'
    }
    return errors
}
