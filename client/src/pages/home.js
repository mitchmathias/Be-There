import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import HomeNav from '../components/Navs/HomeNav';


const  Home = () => {

    return (
        
            <Wrapper>
                <Jumbotron />
                <HomeNav />
            </Wrapper>
        
    )
}

export default Home