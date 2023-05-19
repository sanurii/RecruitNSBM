import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import logo from "../Images/nsbm.png";

export default function HeaderMain() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "0",
          width: "100%",
          height: "5rem",
          background: "#017143",
        }}
      ></div>
      <header>
        <a href="#" className="logo" >
          <img src={logo} className="logo" alt="Logo"  style={{height:"3rem", marginLeft:"0%"}}/>
        </a>
        <ul>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
