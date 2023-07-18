import React from "react";
import Sidebar from "../../MyComponent";
import Orders from "./Orders";
import TopBar from "../../Topbar";
import '../../Dash.css'


export default function AdminPanel() {
    return (
        <div className='App'>
            <div className='AppGlass'>
                <div className='top'>
                    <TopBar/>
                </div>
                <div className='main'>
                    <Sidebar/>
                    <Orders/>
                </div>
            </div>
        </div>
    )
}