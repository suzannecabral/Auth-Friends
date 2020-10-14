import React, { useState } from 'react';


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