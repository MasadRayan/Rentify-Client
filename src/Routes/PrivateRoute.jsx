import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to={"/login"} > </Navigate>
    }

    return children;
};

export default PrivateRoute;