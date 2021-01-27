import React from 'react';
import Wrapper from '../components/Wrapper';
import HomeNav from '../components/Navs/HomeNav';
import Feed from '../components/Feed';
import "./style.css"
const  Home = () => {

    return (
        
            <Wrapper className="body">
                <HomeNav />
                <Feed />
            </Wrapper>
    )
}

export default Home;