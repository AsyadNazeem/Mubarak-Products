import React from "react";
import Sidebar from "../../MyComponent";
import Dashboard from "./Dashboard";
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
                    <div className='side-bar'>
                        <Sidebar/>
                    </div>
                    <div className='container'>
                        <Dashboard/>
                    </div>
                </div>
            </div>
        </div>
    )
}