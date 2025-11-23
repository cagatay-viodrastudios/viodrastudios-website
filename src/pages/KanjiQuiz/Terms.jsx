import React, { useEffect } from 'react';

const KanjiQuizTerms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>KanjiQuiz - Terms & Conditions</h1>
            <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
                <p style={{ marginBottom: '1rem' }}>
                    By downloading or using the KanjiQuiz app, these terms will automatically apply to you.
                    You should make sure therefore that you read them carefully before using the app.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>2. Intellectual Property</h3>
                <p style={{ marginBottom: '1rem' }}>
                    The app itself, and all the trade marks, copyright, database rights and other intellectual
                    property rights related to it, still belong to Viodra Studios.
                </p>

                <h3 style={{ color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>3. User Data</h3>
                <p style={{ marginBottom: '1rem' }}>
                    The app stores and processes personal data that you have provided to us, in order to provide
                    our Service. It is your responsibility to keep your phone and access to the app secure.
                </p>
            </div>
        </div>
    );
};

export default KanjiQuizTerms;
