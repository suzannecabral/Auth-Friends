import React from 'react';

const Friend = (props) => {
    const { name, age, email } = props.friend;
    return(
        <div className="Friend card">
            <div className="friendText">
                <h3>{name}</h3>
                <p>age: {age}</p>
                <p>{email}</p>
            </div>
            <div className="friendButtons">
                <button>Edit</button>
                <button>X</button>
            </div>
        </div>
    );
}

export default Friend;