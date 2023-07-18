import React from "react";
import Sidebar from "../../MyComponent";
import Products from "./Products";
import TopBar from "../../Topbar";
import '../../Dash.css'
import AddNewProducts from "./AddNewProducts";

export default function AdminPanel() {
    return (
        <div className='App'>
            <div className='AppGlass'>
                <div className='top'>
                    <TopBar/>
                </div>
                <div className='main'>
                    <Sidebar/>
                    <Products/>
                    {/*<AddNewProducts/>*/}
                </div>
            </div>
        </div>
    )
}