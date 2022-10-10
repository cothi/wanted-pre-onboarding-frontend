import axios from 'axios'

const END_POINT = 'http://192.168.0.6:8000'

// auth api
export const authApi = {
    signIn: ({ query }) => {
        const [emailQuery, passwordQuery] = query

        return axios
            .post({
                method: 'post',
                url: `${END_POINT}/auth/signin`,
                data: {
                    email: emailQuery,
                    password: passwordQuery,
                },
            })
            .then((res) => res.data)
            .catch((err) => err)
    },
    signUp: ({ query }) => {
        const [emailQuery, passwordQuery] = query
        return axios({
            method: 'post',
            url: `${END_POINT}/auth/signup`,
            data: {
                email: emailQuery,
                password: passwordQuery,
            },
        })
            .then((res) => res)
            .catch((err) => err)
    },
}

// todo api
export const todoApi = {
    addTodo: ({ itemQuery }) => {
        const [item, _, __] = itemQuery
        return axios({
            method: 'post',
            url: `${END_POINT}/todos`,
            data: {
                todo: item,
            },
        })
            .then((res) => res.data)
            .catch((err) => err)
    },
    getTodos: () => {
        return axios({
            method: 'get',
            url: `${END_POINT}/todos`,
        })
            .then((res) => res.data)
            .catch((err) => err)
    },
    updateTodo: ({ itemQuery }) => {
        const [_, id, token] = itemQuery
        return axios({
            method: 'delete',
            url: `${END_POINT}/todos/${id}`,
            headers: { Authorization: 'Bearer ' + token },
        })
            .then((res) => res.data)
            .catch((err) => err)
    },
}
