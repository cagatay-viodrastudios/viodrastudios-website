import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <section id="mission" className="mission">
            <div className="container mission-container">
                <div className="mission-content">
                    <h2 className="section-title">Our <span className="gradient-text">Vision</span></h2>
                    <p className="mission-text">
                        At Viodra Studios, we don't just build apps; we architect digital realities.
                        We believe that the future of interaction lies at the intersection of
                        intuitive design and cutting-edge technology.
                    </p>
                    <p className="mission-text">
                        Our mission is to push the boundaries of what's possible on mobile devices,
                        creating experiences that are not only functional but emotionally resonant
                        and visually breathtaking.
                    </p>
                </div>
                <div className="mission-visual">
                    <div className="hologram-effect">
                        <div className="scanline"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
