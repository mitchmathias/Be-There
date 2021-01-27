import React from 'react';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import HomeNav from '../components/Navs/HomeNav';

import Feed from '../components/Feed';

const  Home = () => {

    return (
        
            <Wrapper>
                <HomeNav />
                <Feed />
                <Footer />
            </Wrapper>
    )
}

export default Home