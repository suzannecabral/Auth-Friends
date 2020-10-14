import React from 'react';

const Login = () => {
    return(
        <div className="Login">
            <h2>Login:</h2>
            <form>
                <input type="text" name="userId" placeholder="userId" />
                <input type="password" name="password" placeholder="password"/>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login;