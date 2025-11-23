import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apps } from '../data/apps';
import Button from '../components/Button';
import './AppDetail.css';

const AppDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const app = apps.find(a => a.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!app) {
        return (
            <div className="app-not-found">
                <h2>App not found</h2>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </div>
        );
    }

    return (
        <div className="app-detail">
            <div className="app-hero" style={{ background: app.image }}>
                <div className="app-hero-overlay"></div>
                <div className="container app-hero-content">
                    <div className="app-icon-large" style={{ background: app.image }}></div>
                    <h1 className="app-title">{app.title}</h1>
                    <div className={`app-status ${app.status === 'LIVE' ? 'live' : 'soon'}`}>
                        {app.status}
                    </div>
                </div>
            </div>

            <div className="container app-body">
                <div className="app-description">
                    <h2>About the App</h2>
                    <p>{app.fullDescription}</p>

                    <div className="app-features">
                        <h3>Key Features</h3>
                        <ul>
                            {app.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {app.status === 'LIVE' && (
                        <div className="app-actions">
                            <Button variant="primary" size="large" onClick={() => window.open(app.playStoreLink, '_blank')}>
                                Get it on Google Play
                            </Button>
                        </div>
                    )}
                </div>

                {app.screenshots.length > 0 && (
                    <div className="app-screenshots">
                        <h3>Screenshots</h3>
                        <div className="screenshot-grid">
                            {app.screenshots.map((shot, index) => (
                                <div key={index} className="screenshot-item" style={{ background: shot }}></div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="container app-legal-links" style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                {app.id === 'kanjiquiz' ? (
                    <>
                        <a href="/apps/kanjiquiz/terms" style={{ marginRight: '2rem', color: 'var(--color-text-muted)' }}>Terms & Conditions</a>
                        <a href="/apps/kanjiquiz/privacy" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</a>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default AppDetail;
