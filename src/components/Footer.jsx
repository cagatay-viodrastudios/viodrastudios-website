import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>VIODRA STUDIOS</h3>
                    <p>Building the future of digital experiences.</p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#mission">Mission</a>
                        <a href="#apps">Apps</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="/terms">Terms & Conditions</a>
                        <a href="/privacy">Privacy Policy</a>
                    </div>

                    <div className="link-group">
                        <h4>Social</h4>
                        <a href="#" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Viodra Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
