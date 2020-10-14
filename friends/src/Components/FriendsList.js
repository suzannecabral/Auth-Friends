import React from "react";
import Friend from "./Friend";
import fakeResponse from "../api/response.json";

const data = fakeResponse.data.friends;

const FriendsList = () => {
    return(
        <div className="FriendsList">
            <h2>My Friends:</h2>
            {data.map((item)=>{
                return(<Friend 
                    friend={item}
                    key={item.id}
                />)
            })}
        </div>
    )
}

export default FriendsList;