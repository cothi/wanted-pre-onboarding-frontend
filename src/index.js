import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Root from './pages/root'
import Todo from './pages/todo'
import SignUp from './pages/signUp'
import ErrorPage from './pages/error-page'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import signUpAction from './actions/signUp'
import signInAction from './actions/signIn'
import todoAction from './actions/todos'
import { todoApi } from './api/api'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import axios from 'axios'

// set router for dividing url of pages
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        action: signInAction,
        loader: async () => {
            const token = localStorage.getItem('token')
            if (token) {
                return redirect('/todo')
            }
        },
    },
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorPage />,
        action: signUpAction,
        loader: async () => {
            const token = localStorage.getItem('token')
            if (token) {
                return redirect('/todo')
            }
        },
    },
    {
        path: '/todo',
        element: <Todo />,
        errorElement: <ErrorPage />,
        action: todoAction,
        loader: async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                return redirect('/')
            }

            let errors = {}
            const res = await todoApi.getTodos({ token: token })

            if (axios.isAxiosError(res)) {
                errors.status = res.response.status
                errors.message = res.response.data.message
                return errors
            }

            return res.data
        },
    },
])
const theme = createTheme({
    palette: {},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
