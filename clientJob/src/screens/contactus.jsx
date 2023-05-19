import React, { useEffect, useState } from "react";
import "../Styles/contactus.css"
import Footer from "./footer"
import Header from"./header"
import tell from '../Images/telephone.png'
import email from'../Images/email.png'
import fax from '../Images/fax.png'
 import call from '../Images/call.png'
import { Link } from 'react-router-dom';




export  function  Contactus(){



    return(

        <div>
              <section>
     
<Header/>
        <div class="content">

            <div class="iconcontact">
                <img src={tell} /><br />
                <img src={email} /><br />
                <img src={fax} /><br />
                <img src={call}/><br />
            </div>
            <div class="txt">
                <br /><br /><br />
                <h1>Phone</h1> <h2>+94 115445000 </h2> <br />
                <h1>Email</h1><h2> inquires@nsbm.ac.lk</h2> <br />
                <h1>Fax</h1> <h2>+94 115445009</h2> <br />
                <h1>Hotline</h1> <h2>+94 712445000 </h2> <br />
            </div>

        </div>
        <div class="form">
            <br /><br /> <br /><h1>Name</h1><br />  <input type="text" class="filed" placeholder="Enter Name" /><br /><br />
            <h1>Contact Number</h1><br />  <input type="text" class="filed" placeholder="Enter Number" /><br /><br />
            <h1>Email</h1><br />  <input type="text" class="filed" placeholder="Enter Email" /><br /><br />
            <h1>Message</h1><br />  <textarea class="filed" placeholder="Type Message"></textarea><br /><br />
            <button class="btn"><h2>SEND</h2> </button>
        </div>

    </section>


    <br /><br />
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.09505432064!2d80.03981205713218!3d6.821512527548537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2z4LeE4La74LeS4LatIOC3gOC3kuC3geC3iuC3gOC3gOC3kuC2r-C3iuKAjeC2uuC3j-C2veC2ug!5e0!3m2!1ssi!2slk!4v1678255851666!5m2!1ssi!2slk" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   

    <Footer/>


        </div>
        


    )



}
