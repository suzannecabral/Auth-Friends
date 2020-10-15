import React from 'react';
import axios from 'axios';

export const getFriends = () => {
    return(
        axios 
            .get("http://localhost:5000/api/friends")
            .then(res =>{
                return res;
            })
            .catch(err => {
                console.log("API error: ", err);
                return err;
            })
    );
}
