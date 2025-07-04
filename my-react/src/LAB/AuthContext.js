import React from 'react';
import { useState, createContext } from 'react';


export const AuthContext = createContext();

const ExampleUsers = [
    {username : "JK", password: "BTS"},
    {username : "RM", password: "BTS"}
]

const AuthProvider = ({children}) =>{
    const [ user, setUser ] = useState(null);
    

    const login = (username, password) => {
        const matched = ExampleUsers.find((u) =>
            username === u.username && password === u.password 
        )
        if(matched){
            setUser(matched);
            return true;
        }
        return false;
    };

    const logOut = () =>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;