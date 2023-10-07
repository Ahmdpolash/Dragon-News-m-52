import React from 'react';
import authHook from '../customHook/authHook';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = authHook()
    const location = useLocation()
    console.log(location.pathname);
    
    if(loading){
        return <p className='text-center text-xl text-red-400 font-bold h-[80vh] flex items-center justify-center'>loading...</p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;