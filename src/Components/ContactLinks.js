import React from 'react';
import { AiOutlineMail, AiFillLinkedin, AiFillHome } from "react-icons/ai";

const ContactLinks = () => {
    return (
        <section className="contact-section">
            <div className="first-row"></div>
            <div className="middle-row">
                <a href="mailto:sspark106@gmail.com" target="_blank"><AiOutlineMail size="20%" color="#BFB29A" /></a>
                <a href="https://www.linkedin.com/in/soyeon-sara-park/" target="_blank"><AiFillLinkedin size="20%" color="#BFB29A" /></a>
                <a href=""><AiFillHome size="20%" color="#BFB29A" /></a>
            </div>
            <div className="last-row"></div>
        </section>
    )
}

export default ContactLinks;