import React from "react";
import styleabout from '../styles/About.module.css'

const About = () => {
    return (
        <main className={styleabout.about}>
            <h1 className={styleabout.header}>About</h1>
            <p className={styleabout.texts}>  I am a full stack web developer who loves building things. Helping people to have a great experience while navigating a website is a must. Providing
        accessibility is important, also one of my concerns is to create
        equality for everybody.</p>
        </main>
    );



}

export default About;