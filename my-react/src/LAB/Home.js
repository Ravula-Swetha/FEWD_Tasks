import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";


const Home = () =>{
    const {user, logout} = useContext(AuthContext);
    return(
        <>
          <h3>Welcome {user?.username}</h3>
          <button onClick={logout}>LogOut</button>
        </>
    )
}

export default Home;