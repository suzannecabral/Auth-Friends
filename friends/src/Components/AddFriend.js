import React, { useState } from 'react';
import shortid from 'shortid';
import axios from 'axios';

const AddFriend = () => {

    const initialValues={
        id:shortid.generate(),
        name:"",
        age:0,
    }
    const [friendForm, setFriendForm] = useState(initialValues);

    const handleChange = e => {
        setFriendForm({...friendForm,[e.target.name]:e.target.value});
    };

    const postFriend = e => {
        e.preventDefault();
        console.log("Friend form sent: ", friendForm);
        axios
            .post('http://localhost:5000/api/friends', friendForm)
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
        <div className="AddFriend">
            <h2>Add a Friend:</h2>
            <form onSubmit={postFriend}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <input type="number" name="age" placeholder="Age" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddFriend;