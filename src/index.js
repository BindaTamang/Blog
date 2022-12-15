import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//component
import App from "./components/App";
import Home from "./components/Home/Home";
import Login from "./components/Login/login";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import About from "./components/About/About";
import Users from "./components/Users/users"

const router = createBrowserRouter([
   
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/Blog/:id",
        element: <Blog/>,

    },
    {
        path: "/Login",
        element: <Login/>,
    }, 
    {
        path: "/Signup",
        element: <Signup/>
    },
    {
        path: "/About",
        element: <About/>,
    },
    {
        path: "/Users",
        element: <Users/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)