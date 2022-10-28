import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import SingleCourseDetails from "../../Pages/SingleCourseDetails/SingleCourseDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../../Pages/NotFound/NotFound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => {
                    return fetch(' https://assignment-10-server-pink.vercel.app/courses')
                },
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(` https://assignment-10-server-pink.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/single_course_details/:id',
                loader: ({ params }) => fetch(` https://assignment-10-server-pink.vercel.app/single_course_details/${params.id}`),
                element: <SingleCourseDetails></SingleCourseDetails>
            },
            {
                path: '/check_out/:id',
                loader: ({ params }) => fetch(` https://assignment-10-server-pink.vercel.app/check_out/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])