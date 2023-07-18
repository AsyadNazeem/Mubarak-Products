import React from "react";
import Sidebar from "../../MyComponent";
import Reports from "./Reports";
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
                    <Reports/>
                </div>
            </div>
        </div>
    )
}