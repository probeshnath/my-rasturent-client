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
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./adminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";

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
            // normal user routes
            {
                path: "cart",
                element: <Cart />
            },
            {
                path:"userHome",
                element: <UserHome />
            },
            {
                path:"payment",
                element:<Payment />
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />
            },
            // admin routes only
            {
                path:"admineHome",
                element:<AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: "allUsers",
                element: <AdminRoute> <AllUsers /></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute> <AddItems /></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute> <ManageItems /></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`https://my-restaurant-server-six.vercel.app/menu/${params.id}`)
            }
        ]
    }

]);

export default router;