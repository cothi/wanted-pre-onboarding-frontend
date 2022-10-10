import { authApi as auth } from '../api/api'
import { userValidation } from '../utils/validation'
import { redirect } from 'react-router-dom'

export default async function signInAction({ request }) {
    let formData = await request.formData()
    let email = formData.get('email')
    let password = formData.get('password')
    let query = [email, password]
    let errors = userValidation({ userInfo: query })

    if (Object.keys(errors).length) {
        return errors
    }

    const res = await auth.signIn({ query: query })
    console.log(res)
    if (res.status !== 200) {
        errors.status = res.response.status
        errors.message = res.response.data.message
        return errors
    }
    const data = res.data
    localStorage.setItem('token', 'Bearer ' + data.access_token)
    return redirect('/todo')
}
