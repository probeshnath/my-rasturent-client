import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "order/:category",
                element: <Order />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "secret",
                element: <PrivateRoute><Secret /></PrivateRoute> ,
            }
        ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
        children:[
            {
                path: "cart",
                element: <Cart />
            },
            // admin routes
            {
                path: "allUsers",
                element: <AllUsers />
            }
        ]
    }

]);

export default router;