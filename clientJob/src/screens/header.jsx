import React, { useEffect, useState } from "react";
import "../Styles/Home.css"
import logo from "../Images/nsbm.png"
import { FaFacebook,FaYoutube,FaLinkedin,FaInstagram} from 'react-icons/fa';
import { Link } from "react-router-dom";

 export default function HeaderMain(){
    return(
        <div>
<div style={{
        position: "absolute",
        bottom: "85%",
        left: "0",
        width:"100%",
        height: "100%",
        background: "#017143",
        // height:"1000px"
        }}>

        </div>
        <header>
            <a href="#" class="logo"><img src={logo} class="logo" /></a>
            <ul>
            <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">CV Templates</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/">Login</a></li>

            </ul>
        </header>

        </div>
    )
}
