import React from "react";
import './Services.css'

function Services() {
    return(
        <div>
            {/* <h1 style={{marginTop: '10%'}}>Services</h1> */}
            <section id="services">
                <div class="services container">
                    <div class="service-top">
                        <h1 class="section-title">
                            Serv
                            <span>i</span>
                            ces
                        </h1>
                        <p>
                             My web design service provides you with a customized website design that's perfect for your business or personal site. I will be working with you to create a design that matches your brand, while giving your customers a seamless user experience that will delight them! 
                        </p>
                    </div>
                    <div class="service-bottom">
                        <div class="service-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png"></img>

                            </div>
                            <h2>Android applications development services</h2>
                            <p>
                                The number of people who own Android devices is growing year over year. You certainly want to offer your unique solution to this wide user base! I develop Android apps for various devices using the Java and Kotlin programming languages and Google’s own development tools and guidelines. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;