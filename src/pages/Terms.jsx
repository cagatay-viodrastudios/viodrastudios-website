import React, { useEffect } from 'react';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Terms & Conditions</h1>
            <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Welcome to Viodra Studios. By accessing our website and using our mobile applications,
                    you agree to be bound by these Terms and Conditions. Please read them carefully.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>2. Intellectual Property</h3>
                <p style={{ marginBottom: '1rem' }}>
                    The content, organization, graphics, design, compilation, magnetic translation, digital conversion
                    and other matters related to the Site are protected under applicable copyrights, trademarks and
                    other proprietary (including but not limited to intellectual property) rights.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>3. Use License</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Permission is granted to temporarily download one copy of the materials (information or software)
                    on Viodra Studios' website for personal, non-commercial transitory viewing only.
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default Terms;
