// logout function
// remove token of localStorage 
// and  redirect root path
export default function logout({ nav }) {
    localStorage.removeItem('token')
    nav('/')
}
