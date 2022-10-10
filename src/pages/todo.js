import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header'

export default function Todo() {
    const nav = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            nav('/')
        }
    }, [])
    return (
        <div>
            <Header></Header>
        Todo
        </div>
    )
}
