import React from "react";
import Sidebar from "../../MyComponent";
import Customers from "./Customers";
import TopBar from "../../Topbar";
import '../../Dash.css'

export default function CuxStructs() {
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
                        <Customers/>
                    </div>
                </div>
            </div>
        </div>
    )
}