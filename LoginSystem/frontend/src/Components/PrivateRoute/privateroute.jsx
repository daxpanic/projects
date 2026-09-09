import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../auth';

const PrivateRoute = ({ children }) => {
    const token = getToken();
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
