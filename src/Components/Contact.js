import React from "react";
import './Contact.css'

function Contact(){
    return(
       <section id="contact">
        <div class="contact container">
            <div>
                <h1 style={{color: 'black', marginTop:'30%'}} class="section-title">
                    Contact 
                    <span style={{color: 'crimson'}}>info</span>
                </h1>
            </div>
            <div class="contact-items">
                <div class="contact-item">
                    <div class="icon">
                        <img src="https://img.icons8.com/bubbles/100/000000/phone.png"></img>
                    </div>
                    <div class="contact-info">
                        <h1 style={{ color: 'black'}}>Phone</h1>
                        <h2 style={{ color: 'black'}}>+27 671141484</h2>
                        <h2 style={{ color: 'black'}}>+27 686864617</h2>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="icon">
                        <img src="https://img.icons8.com/bubbles/100/000000/new-post.png"></img>
                    </div>
                    <div class="contact-info">
                        <h1 style={{ color: 'black'}}>Email</h1>
                        <h2 style={{color: 'black'}}>Tumi.mashigo15@gmail.com</h2>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="icon">
                        <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"></img>
                    </div>
                    <div class="contact-info">
                        <h1 style={{ color: 'black'}}>Address</h1>
                        <h2 style={{ color: 'black'}}>Johannesburg, South Africa</h2>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div id="footer">
        <div class="footer container">
            <div class="footer container">
                <div class="brand">
                    <h1 >
                        <span style={{color: 'crimson'}}>T</span>
                         umi 
                         <span style={{color: 'crimson'}}> M</span>
                        ashigo
                    </h1>
                </div>
                <h2>My Social Media Handles</h2>
                <div class="social-icon">
                    <div class="social-item">
                        <a href="https://facebook.com/tumi.mashigo.14">
                            <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"></img>
                        </a>
                    </div>

                    <div class="social-item">
                        <a href="https://instagram.com/ja_twizz">
                            <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"></img>
                        </a>
                    </div>

                    <div class="social-item">
                        <a href="https://github.com/TumiDev10">
                            <img src="https://img.icons8.com/bubbles/100/000000/github.png"></img>
                        </a>
                    </div>
                </div>
                <p style={{marginTop: '-22px'}}>Copyright © 2022 Tumi. All rights reserved</p>
                
            </div>
        </div>
        </div>
        </div>
       </section>


    )
}

export default Contact;