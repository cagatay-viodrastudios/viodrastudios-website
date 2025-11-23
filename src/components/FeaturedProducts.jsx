import React from 'react';
import { apps } from '../data/apps';
import Card from './Card';
import Button from './Button';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <section id="apps" className="featured-products">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="gradient-text">Apps</span></h2>
                    <p className="section-subtitle">Explore our latest innovations in mobile technology.</p>
                </div>

                <div className="products-grid">
                    {apps.map((product) => (
                        <Card key={product.id} className="product-card">
                            <div className="product-image" style={{ background: product.image }}>
                                <div className={`status-badge ${product.status === 'LIVE' ? 'live' : 'soon'}`}>
                                    {product.status}
                                </div>
                            </div>
                            <div className="product-content">
                                <h3>{product.title}</h3>
                                <p>{product.shortDescription}</p>
                                {product.status === 'LIVE' ? (
                                    <Button variant="primary" size="medium" onClick={() => window.location.href = `/apps/${product.id}`}>
                                        View Details
                                    </Button>
                                ) : (
                                    <Button variant="secondary" size="medium" disabled>
                                        In Development
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
