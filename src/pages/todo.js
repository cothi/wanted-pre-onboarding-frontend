import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Todo() {
    const nav = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            nav('/')
        }
    }, [])
    return <div>todo</div>
}
