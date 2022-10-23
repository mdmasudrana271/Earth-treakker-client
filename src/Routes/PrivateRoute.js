import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div
        className='text-xl mt-10 flex justify-center items-center'><h1>Please Check Your Email And Varify</h1></div>
    }
    if(user && user.emailVerified){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;