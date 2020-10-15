import React from 'react';
import axios from 'axios';

export const axiosWithAuth = () =>{
    //this is Axios for the secure portions of the site
    //possible to use it for non-secure also
    //easy to use for React I
    //get login test acct from backend person
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        },
    });
    
};

