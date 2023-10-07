import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import CardDetails from '../Pages/Home/cardDetails';
import PrivateRoute from './PrivateRoute';

const Route  = createBrowserRouter([
    {
        path : '/',
        element :< Root></Root>,
        children : [
            {
                path : '/',
                element:<Home></Home>,
                loader :()=> fetch('/news.json')
                
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path : '/register',
                element: <Register></Register>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                

            }
        ]
    }
])

export default Route;