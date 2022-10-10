export default function logout({ nav }) {
    localStorage.removeItem('token')
    nav('/')
}
