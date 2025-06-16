import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Layout from './components/Layout'

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: "/signup", element: <SignUp /> }
        ]


    },

])


export default router