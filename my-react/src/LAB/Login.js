import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const Login = () =>{
    const {login} = useContext(AuthContext);
    const [ formData , setFormData] = useState({username: '', password: ''})
    const [ error, setError ] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target;
            setFormData((prevData) =>({
                ...prevData,
                [name] : value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const success = login(formData.username, formData.password)
        if(success){
            console.log(formData);
        }
        else{
            setError("Invalid Credentials");
        }
    }

    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div key="1">
                <label htmlFor="username">Username</label>
                <input
                   type="text"
                   name="username"
                   placeholder='name'
                   value={formData.username}
                   onChange={handleChange}
                >
                </input>
            </div>

            <div key="2">
                <label htmlFor="password">Password</label>
                <input
                   type="password"
                   name="password"
                   placeholder='password'
                   value={formData.password}
                   onChange={handleChange}
                >
                </input>
            </div>

            <button>Submit</button>
        </form>
        <p> {error} </p>
        </>
    )
}

export default Login;