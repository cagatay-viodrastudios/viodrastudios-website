import React, { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
            <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>1. Information We Collect</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We collect information to provide better services to all our users. This includes information
                    you provide to us directly and information we get from your use of our services.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Information</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We use the information we collect from all of our services to provide, maintain, protect and
                    improve them, to develop new ones, and to protect Viodra Studios and our users.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>3. Information Sharing</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We do not share personal information with companies, organizations and individuals outside of
                    Viodra Studios unless one of the following circumstances applies.
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

export default Privacy;
