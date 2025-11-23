import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Mission from '../components/Mission';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Mission />
            <Contact />
        </main>
    );
};

export default Home;
