import React from 'react';
import Url from '../url/url'

const Dashboard = ({setLoginUser})=>{
    return (
        <div className="">
            <Url/>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>)
}

export default Dashboard;