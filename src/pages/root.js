import { useEffect } from 'react'
import { userApi } from '../api/api'


export default function Root() {
    const res = userApi.signUp({
        query: ['12F435@example.com', 'bcdaabcdd'],
    })
    return <div>Helo</div>
}
