import React, { Component } from 'react';
import './../App.css';
import Homepage from '../page/Homepage';
import Login from './../page/Login';
import Create from './../page/Createuser';


const router =[
    {
        path: '/',
        exact: true,
        main:()=> <Homepage />
    },  
    {
        path: '/login',
        exact: true,
        main:()=> <Login />
    },
    {
        path: '/create',
        exact: true,
        main:()=> <Create />
    }
]



export default router;