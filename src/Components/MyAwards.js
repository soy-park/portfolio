import React from 'react';
import ContactButton from './ContactButton';

const MyAwards = () => {
    return (
        <section className="awards-section">
            <aside className="awards-title">
                <h1 className="awards-and-recognitions">Awards & Recognitions</h1>
            </aside>
            <main className="awards">
                <p className="award">"Nobel Prize" for Best Website</p>
                <p className="sender-cub">Cell Physiology Class, University of Colorado Boulder</p>
                <p className="award">“Outstanding Achievement Award: Outstanding Academic Achievement, Dedication to Community Services, and Outstanding Leadership Qualities"</p>
                <p className="sender-rocky">Rocky Mountain Lions Club</p>
                <p className="award">Certificate of Merit for Excellence in Visual Arts</p>
                <p className="sender-scholastic">The Scholastic Inc.</p>
                <ContactButton />
            </main>
        </section>
    )
}

export default MyAwards;