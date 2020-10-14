import React from 'react';

const Friend = (props) => {
    const { name, age, email } = props.friend;
    console.log(props.friend);
    return(
        <div className="Friend card">
            <h3>{name}</h3>
            <p>age: {age}</p>
            <email>{email}</email>
        </div>
    );
}

export default Friend;