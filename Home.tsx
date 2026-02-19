import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainProjects from './components/MainProjects';
import Expertise from './components/Expertise';
import OtherProjects from './components/OtherProjects';
import Footer from './components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main className="relative z-10">
                <Hero />
                <MainProjects />
                <Expertise />
                <OtherProjects />
            </main>
            <Footer />
        </>
    );
};

export default Home;
