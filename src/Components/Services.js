import React from "react";
import './Services.css'

function Services() {
    return(
        <div>
            {/* <h1 style={{marginTop: '10%'}}>Services</h1> */}
            <section id="services">
                <div class="services container">
                    <div class="service-top">
                        <h1 style={{marginTop: '20%'}} class="section-title1">
                            Serv
                            <span>i</span>
                            ces
                        </h1>
                        <p>
                        As a full stack developer, I provide comprehensive web development services to meet all your project requirements. With expertise in both front-end and back-end development, I ensure a seamless and efficient development process from start to finish. Here's what you can expect from my services:
                        </p>
                    </div>
                    <div class="service-bottom">
                        <div class="service-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"></img>

                            </div>
                            <h2>Captivating Front-end development</h2>
                            <p>
                            I create visually appealing and user-friendly interfaces using the latest web technologies like React.js, React Native, HTML, CSS, and JavaScript.
                            Your website will be responsive and optimized for various devices and screen sizes, ensuring a consistent experience for your users.
                            I bring your web pages to life with interactive features, animations, and transitions, enhancing user engagement.
                            </p>
                        </div>

                        <div class="service-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"></img>
                            </div>
                            <h2>Powerful Back-end Development:</h2>
                            <p>
                            I develop robust server-side applications using languages like Java, or Node.js, ensuring efficient handling of your business logic.
                            Database management is my expertise, and I design and implement scalable databases with proper data modeling and querying techniques.
                            I seamlessly integrate RESTful APIs to facilitate smooth communication between your front-end and back-end components.
                            Security is a priority, and I implement measures to protect your application against common vulnerabilities. 
                            </p>
                        </div>

                        <div class="service-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"></img>
                            </div>
                            <h2>Efficient Database Management:</h2>
                            <p>
                            I design and set up databases based on your specific requirements, utilizing popular database systems such as MySQL, or MongoDB.
                            From creating schemas and tables to optimizing complex queries, I ensure your data is structured and easily accessible.
                            I handle data migration, backup, and recovery strategies to safeguard your valuable information.
                            </p>
                        </div>

                        <div class="service-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"></img>
                            </div>
                            <h2>Collaborative Version Control and Deployment:</h2>
                            <p>
                            I utilize version control systems like Git or Buddy to manage and track changes, allowing seamless collaboration with your team.
                            With platforms like GitHub or GitLab, I ensure efficient code sharing, conflict resolution, and smooth code merging.
                            </p>
                            <p></p>
                        </div>

                        <div class="service-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"></img>
                            </div>
                            <h2>Effective Problem Solving and Troubleshooting:</h2>
                            <p>
                            I excel at identifying and resolving issues in both front-end and back-end components, ensuring your application runs smoothly.
                            From debugging code and optimizing performance to addressing security vulnerabilities, I take care of the technical challenges.
                            Through thorough testing, including unit testing, integration testing, and end-to-end testing, I ensure a reliable and bug-free application.
                            I continuously analyze and improve the architecture and performance of your application to meet your evolving needs.
                            </p>
                            <p></p>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;