import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types';

const Login = ({ setToken})=>{
    const history = useHistory()
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const updateInputValue = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const login = ()=>{
        axios.post("http://localhost:3005/api/login",user).then(res=>{
            alert(res.data.data.token)
            localStorage.setItem('token',res.data.data.token)
            history.push("/")
        })
    }
    return (
        <div className="ui form">
            <h1>Login</h1>
            <input type="text" className="input" name="email" value={user.email} placeholder="Enter Email" onChange={updateInputValue}></input>
            <input type="password" className="input" name="password" value={user.password} placeholder="Enter Password" onChange={updateInputValue}></input>
            <button className="button" onClick={login}>Login</button>
            <div>OR</div>
            <button className="button" onClick={() => history.push("/register")}>Signup</button>
        </div>
    )
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}