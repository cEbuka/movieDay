import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import MovieDetails from './pages/MovieDetails'

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/movies/:id", element: <MovieDetails /> }
        ]


    },


    { path: "*", element: <ErrorPage /> }

])


export default router