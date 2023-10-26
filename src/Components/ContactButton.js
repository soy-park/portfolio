import React from 'react';

const ContactButton = () => {
    const renderEmail = () => {
        const mailToUrl = 'mailto:sspark106@gmail.com';
        window.open(mailToUrl, '_blank');
    }

    return (
        <button 
            className="contact-btn" 
            onClick={renderEmail}>
            Contact Her!
        </button>
    )
}

export default ContactButton;