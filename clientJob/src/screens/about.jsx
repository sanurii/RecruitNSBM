import React, { useEffect, useState } from "react";
import "../Styles/Home.css"
import Footer from "./footer"
import Header from"./header"
import look from '../Images/look.png'
import { FaFacebook,FaYoutube,FaLinkedin,FaInstagram} from 'react-icons/fa';
import { Link } from "react-router-dom";

export function About(){
    return(

        <div>
            <Header/>
            <h1 
            style={
                {
                    fontSize: "50px",
            fontWeight: "bold",
            marginTop: "8%",
            color: "#017143",
            fontFamily: "Bahnschrift"
                }
            }
            >ABOUT</h1>

            <div class="img">
        <img src={look} style={{width:"100%"}} />
    </div>
    <br /><br /><br />
    <div class="txt" >
        <h2>
            NSBM Green University Town is keen that its students not only carry a good
            degree after their graduation from NSBM but are also holistic citizens, with
            the right exposure, capable of adding value to organizations they work at or
            capable of building their own enterprises NSBM Job Portal is a Job directory where
            NSBM undergraduates and post graduates as Job seekers can find and apply for Jobs
            all across Sri Lanka. Job seekers and submit your professional profile with the CV and
            we
            will match you're with Jobs posted by NSBM and Other affiliated companies.
            Job seekers will receive instant Job Alerts to you Mobile Phone or Email ID soon when
            matching Jobs are published. Employers can Post Job Listings for Free!
        </h2>
    </div>
            <Footer/>



        </div>
    )
    
}
