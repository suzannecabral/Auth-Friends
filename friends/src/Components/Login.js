import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {

    const initialValues={
        username:"",
        password:""
    };
    const [credentials,setCredentials] = useState(initialValues);

    const handleChange = e => {
        setCredentials({...credentials,[e.target.name]:e.target.value});
    };

    const login = e => {
        e.preventDefault();
        const credentialsJSON = JSON.stringify(credentials); 
        console.log("Credentials sent: ", credentialsJSON);
        axios
            .post('http://localhost:5000/api/login', credentialsJSON)
            .then(res=>{
                console.log(res.data)
                return res.data;
            })
            .catch(err => {
                console.log("API: Credentials Post error: ", err);
                return err;
            })
    };


    return(
        <div className="Login">
            <h2>Login:</h2>
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login;