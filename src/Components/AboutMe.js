import React from 'react';
import ContactButton from './ContactButton';

const AboutMe = () => {
    return (
        <section className="about-me-section">
            <article className="about-left-section">
            </article>
            <aside className="about-right-section">
                <h1 className="greeting">안녕하세요 (Hi),</h1>
                <h1 className="greeting-name">I'm Soyeon Park</h1>
                <p className="introduction">Also known as Sara Park, I am dedicated, collaborative, and detail-oriented.  My mission as a front-end developer is to create more diverse and positive user experiences.</p>
                <ContactButton />
            </aside>
        </section>
    )
}

export default AboutMe;