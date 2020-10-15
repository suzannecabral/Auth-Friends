import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import fakeResponse from "../api/response.json";
import { axiosWithAuth } from "../api/axiosWithAuth";






const FriendsList = () => {

    const initialFriends={};

    const [loading, setLoading] = useState(true);
    const [friendsData, setFriendsData] = useState(initialFriends);
    // const friendsData = fakeResponse.data.friends;

    useEffect(()=>{
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            console.log("Authorized GET successful: ", res.data);
            setTimeout(()=>{
                setFriendsData(res.data)
                setLoading(false)
            },200)
        })
        .catch(err => {
            console.log("API GET error: ", err);
            return err;
        })

    },[]);
    

    return(
        <div className="FriendsList">
            {loading ? 
                    <>
                        <h2>Loading...</h2>

                    </> 
                :  
                    (<>
                        <h2>My Friends:</h2>
                        {friendsData.map((item)=>{
                            return(<Friend 
                                friend={item}
                                key={item.id}
                            />)
                        })}
                    </>)
                }
        </div>
    )
}

export default FriendsList;