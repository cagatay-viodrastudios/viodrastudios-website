import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title">
                    VIODRA <span className="gradient-text">STUDIOS</span>
                </h1>
                <p className="hero-subtitle">
                    Building the future of mobile apps and next-generation games.
                </p>
                <div className="hero-cta">
                    <Button variant="primary" size="large" onClick={() => document.getElementById('apps').scrollIntoView({ behavior: 'smooth' })}>
                        Explore Our Apps
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
