import React from "react";
import './About.css';
import img from '../images/about-me.jpg';

function About() {
    return(
        <section id="about">
            <div class="about container">
                <div class="col-left">
                    <div  class="about-img">
                        <img src={img}></img>
                    </div>
                </div>
                <div class="col-right">
                    <h1 class="section-title2">
                        About 
                        <span style={{color: 'red'}}> me</span>
                    </h1>
                    <h2>FullStack Developer</h2>
                    <p>My name is Tumi Mashigo, I am a FullStack Software Developer with a focus on back-end technology. I have a strong foundation in C#, Java, HTML, CSS, and JavaScript. However, I decided to specialize in React and its ecosystem, including React Router and Redux Toolkit. Currently, I am expanding my skills by learning React Native with Typescript. My goal is to create exceptional user experiences and contribute to innovative software solutions. I am eager to take on new challenges and collaborate with talented individuals in shaping the future of software development.</p>
                    {/* <p>
                        My name is Tumi Mashigo and I am a Junior software developer. My initial focus has been on back-end technology, but as my knowledge of the environment grows, I am interested in expanding my knowledge. I first built a solid foundation in C#, Java, HTML, CSS, JavaScript, and related technologies before deciding to focus on React as my chosen framework to study. This also included a detour via Router, Redux Toolkit, and Next.js. I'm learning Python right now, along with data structures and algorithms. 
                    </p> */}
                    <a href="Tumi_Jaden Mashigo_Resume_28-09-2022-22-48-51.pdf" class="cta">Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default About;