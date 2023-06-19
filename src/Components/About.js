import React from "react";
import './About.css';
import img from '../images/about-me.jpg';

function About() {
    return(
        <section id="about">
            <div class="about container">
                <div class="col-left">
                    <div class="about-img">
                        <img src={img}></img>
                    </div>
                </div>
                <div class="col-right">
                    <h1 class="section-title2">
                        About 
                        <span style={{color: 'red'}}> me</span>
                    </h1>
                    <h2>FullStack Developer</h2>
                    <p>
                    My name is Tumi Mashigo, and I am a FullStack Software Developer with a passion for building innovative and robust applications. With a strong foundation in C#, Java, HTML, CSS, and JavaScript, I have honed my skills across a range of technologies.

                    My initial focus was on back-end development, where I gained expertise in crafting efficient and scalable solutions. However, as my knowledge of the software development environment has grown, I have become increasingly interested in expanding my skill set.

                    In my journey as a developer, I made a strategic decision to delve deeper into the world of front-end development, and that's when I discovered the power and versatility of React. I dedicated myself to mastering React and its ecosystem, including essential tools like React Router for seamless navigation and Redux Toolkit for efficient state management.

                    To further enhance my skills and keep up with the ever-evolving tech landscape, I am currently immersing myself in learning React Native with Typescript. This combination allows me to leverage my existing knowledge of React to develop mobile applications for both iOS and Android platforms, while enjoying the benefits of type safety and enhanced development experience provided by Typescript.

                    By continually expanding my expertise, I aim to create exceptional user experiences and deliver high-quality software solutions. I am excited to embrace new challenges, contribute to cutting-edge projects, and collaborate with talented individuals to shape the future of software development.
                    </p>
                    <a href="Tumi_Jaden Mashigo_Resume_28-09-2022-22-48-51.pdf" class="cta">Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default About;