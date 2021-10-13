import React, {useState} from 'react';
import axios from 'axios';

const Url = ()=>{
    const [url,setUrl] = useState({
        full_url:""
    })
    const updateInputValue = e =>{
        const {name,value} = e.target
        setUrl({
            ...url,
            [name]:value
        })
    }
    const saveUrl = ()=>{
        axios.post("http://localhost:3005/api/make-shorturl",url).then(res=>{
            alert(res.data.message)
        })
    }
    return (
        <div className="ui form">
            <h1>Add Url</h1>
            <input type="text" className="input" name="full_url" value={url.full_url} placeholder="Enter Url" onChange={updateInputValue}></input>
            <button className="button" onClick={saveUrl}>Submit</button>
        </div>
    )
}

export default Url;