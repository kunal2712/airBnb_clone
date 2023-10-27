import React from "react";
import logo from '../navlogo.jpg'
export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="nav-logo" alt='logo'></img>
        </nav>
    )
}