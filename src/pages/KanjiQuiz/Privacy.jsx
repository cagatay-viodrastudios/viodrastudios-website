import React, { useEffect } from 'react';

const KanjiQuizPrivacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>KanjiQuiz - Privacy Policy</h1>
            <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>1. Information Collection</h3>
                <p style={{ marginBottom: '1rem' }}>
                    For a better experience, while using our Service, we may require you to provide us with certain
                    personally identifiable information. The information that we request will be retained by us
                    and used as described in this privacy policy.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>2. Log Data</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We want to inform you that whenever you use our Service, in a case of an error in the app
                    we collect data and information (through third party products) on your phone called Log Data.
                </p>
            </div>
        </div>
    );
};

export default KanjiQuizPrivacy;
