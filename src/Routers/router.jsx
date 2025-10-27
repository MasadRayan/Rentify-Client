import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Routes/PrivateRoute";
import ListCars from "../Pages/ListCars/ListCars";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyCars from "../DashboardPages/CarOwnerDashboard/MyCars";
import Profile from "../DashboardPages/Profile";
import DashboardHome from "../DashboardPages/DashboardHome/DashboardHome";

export const router  = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/listCars',
                element: <PrivateRoute>
                    <ListCars></ListCars>
                </PrivateRoute>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome,
            },
            {
                path: 'profile',
                Component: Profile
            },

            {
                path: 'myCars',
                Component: MyCars
            }
        ]
    }
])