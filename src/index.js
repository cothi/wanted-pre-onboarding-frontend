import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Root from './pages/root'
import Todo from './pages/todo'
import SignUp from './pages/signUp'
import ErrorPage from './pages/error-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { action as signUpAction } from './actions/signUp'

// set router for dividing url of pages
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorPage />,
        action: signUpAction,
    },
    {
        path: '/todo',
        element: <Todo />,
        errorElement: <ErrorPage />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
