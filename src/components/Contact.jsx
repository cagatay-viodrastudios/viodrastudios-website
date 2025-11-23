import React from 'react';
import Button from './Button';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-container">
                <div className="contact-content">
                    <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="contact-text">
                        Have a project in mind or want to learn more about our studios?
                        We'd love to hear from you.
                    </p>
                    <div className="contact-actions">
                        <Button variant="primary" size="large" onClick={() => window.location.href = 'mailto:support@viodrastudios.com'}>
                            Contact Support
                        </Button>
                        <p className="contact-email">support@viodrastudios.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
