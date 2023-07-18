import React from "react";
import Sidebar from "../../MyComponent";
import TopBar from "../../Topbar";
import '../../Dash.css'
import Admins from "./Admins";

export default function AdminStruct() {
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
                        <Admins/>
                    </div>
                </div>
            </div>
        </div>
    )
}