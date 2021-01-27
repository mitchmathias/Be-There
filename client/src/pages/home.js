import React from 'react';
import Wrapper from '../components/Wrapper';
import HomeNav from '../components/Navs/HomeNav';
import Feed from '../components/Feed';

const  Home = () => {

    return (
        
            <Wrapper>
                <HomeNav />
                <Feed />
            </Wrapper>
    )
}

export default Home;