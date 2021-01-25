import React from 'react';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import HomeNav from '../components/Navs/HomeNav';


const  Home = () => {

    return (
        
            <Wrapper>
                <Jumbotron />
                <HomeNav />
                <Footer />
            </Wrapper>
        
    )
}

export default Home