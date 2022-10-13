import axios from 'axios'
import { redirect } from 'react-router-dom'
import { authApi as auth } from '../api/api'
import * as vali from '../utils/validation'
export default async function signUpAction({ request }) {
    let formData = await request.formData()
    let email = formData.get('email')
    let password = formData.get('password')
    let query = [email, password]
    let errors = vali.userValidation({ userInfo: query })

    if (Object.keys(errors).length) {
        return errors
    }

    const res = await auth.signUp({ query: query })
    if (axios.isAxiosError(res)) {
        errors.status = res.response.status
        errors.message = res.response.data.message
        return errors
    }
    const data = res.data
    localStorage.setItem('token', 'Bearer ' + data.access_token)
    return redirect('/todo')
}
