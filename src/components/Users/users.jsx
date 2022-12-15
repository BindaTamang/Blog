import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
                console.log(res.data);
                setUsers(res.data);
            }catch(err){
                console.log(err)
            }
        };
        fetchUsers();
    }, []);

    return(
        <>
        {users.length>0? (
            <div>
                {users.map((user)=>{
                    return<p key={user.id}>{user.name}</p>;
                })}
            </div>
        ) : (
            <p>Loading....</p>
        )}
        </>
    );
};
export default Users;