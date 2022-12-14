import axios from 'axios'

// const END_POINT = 'http://192.168.0.6:8000'
// const END_POINT = 'https://pre-onboarding-selection-task.shop'
const END_POINT = process.env.REACT_APP_API_ENDPOINT

// auth api
export const authApi = {
    signIn: ({ query }) => {
        const [emailQuery, passwordQuery] = query
        const jsonQuery = JSON.stringify({
            email: emailQuery,
            password: passwordQuery,
        })
        return axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: `${END_POINT}/auth/signin`,
            data: jsonQuery,
        })
            .then((res) => res)
            .catch((err) => err)
    },
    signUp: ({ query }) => {
        const [emailQuery, passwordQuery] = query
        const jsonQuery = JSON.stringify({
            email: emailQuery,
            password: passwordQuery,
        })
        return axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: `${END_POINT}/auth/signup`,
            data: jsonQuery,
        })
            .then((res) => res)
            .catch((err) => err)
    },
}

// todo api
export const todoApi = {
    createTodo: ({ itemQuery }) => {
        const [item, token] = itemQuery
        const jsonQuery = JSON.stringify({
            todo: item,
        })
        return axios({
            method: 'post',
            url: `${END_POINT}/todos`,
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            data: jsonQuery,
        })
            .then((res) => res)
            .catch((err) => err)
    },
    deleteTodo: ({ itemQuery }) => {
        const [id, token] = itemQuery
        return axios({
            method: 'delete',
            url: `${END_POINT}/todos/${id}`,
            headers: { Authorization: token },
        })
            .then((res) => res)
            .catch((err) => err)
    },
    getTodos: ({ token }) => {
        return axios({
            method: 'get',
            url: `${END_POINT}/todos`,
            headers: { Authorization: token },
        })
            .then((res) => res)
            .catch((err) => err)
    },
    updateTodo: ({ itemQuery }) => {
        const [id, token, todo, completed] = itemQuery
        const jsonQuery = JSON.stringify({
            todo: todo,
            isCompleted: completed,
        })
        return axios({
            method: 'put',
            url: `${END_POINT}/todos/${id}`,
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            data: jsonQuery,
        })
            .then((res) => res)
            .catch((err) => err)
    },
}
