import React from 'react';

const AddFriend = () => {
    return(
        <div className="AddFriend">
            <h2>Add a Friend:</h2>
            <form>
                <input type="text" name="Name" placeholder="Name" />
                <input type="text" name="age" placeholder="Age" />
                <input type="email" name="email" placeholder="Email" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddFriend;