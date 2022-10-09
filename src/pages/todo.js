import { useId } from 'react'
import { useParams } from 'react-router-dom'

export default function Todo() {
    let { userId } = useParams()
    console.log(userId)

    return <div>todo</div>
}
