import { redirect } from 'react-router-dom'
import * as api from '../api/api'
export async function action({ request }) {
    let formData = await request.formData()
    let email = formData.get('email')
    let password = formData.get('password')
    let query = [email, password]
    const errors = {}
    const auth = api.authApi

    if (typeof email !== 'string' || !email.includes('@')) {
        errors.email = "That doesn't look like an email address"
    }

    if (typeof password !== 'string' || password.length <= 7) {
        errors.password = 'Password must be at least 8 characters'
    }

    if (Object.keys(errors).length) {
        return errors
    }

    const res = await auth.signUp({ query: query })
    console.log(res)
    if (res.status !== 201) {
        errors.status = res.response.status
        errors.message = res.response.data.message
        return errors
    }
    const data = res.data
    alert("로그인 성공")
    return redirect('/')
}
