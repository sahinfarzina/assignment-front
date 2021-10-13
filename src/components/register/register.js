import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"

const Register = ()=>{
    const history = useHistory()
    const [user,setUser] = useState({
        full_name:"",
        email:"",
        password:"",
        contact_no:""
    })
    const updateInputValue = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const signup = ()=>{
        axios.post("http://localhost:3005/api/signup",user).then(res=>{
            alert(res.data.message)
            history.push("/login")
        })
    }
    return (
        <div className="ui form">
            <h1>Signup</h1>
            <input type="text" className="input" name="full_name" value={user.full_name} placeholder="Enter Full Name" onChange={updateInputValue}></input>
            <input type="text" className="input" name="email" value={user.email} placeholder="Enter Email"  onChange={updateInputValue}></input>
            <input type="password" className="input" name="password" value={user.password} placeholder="Enter Password"  onChange={updateInputValue}></input>
            <input type="text" className="input" name="contact_no" value={user.contact_no} placeholder="Enter Contact No. (xxx) xxx-xxxx)"  onChange={updateInputValue}></input>
            <button className="button" onClick={signup}>Signup</button>
            OR
            <button className="button" onClick={() => history.push("/login")}>Login</button>
        </div>
    )
}

export default Register;