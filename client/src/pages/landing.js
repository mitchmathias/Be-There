import React from 'react';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import LandingNav from '../components/Navs/LandingNav'


const Landing = () => {

    return (
        <div>
            <Welcome />
            <LandingNav />
            <Footer />
        </div>
    )
}

export default Landing