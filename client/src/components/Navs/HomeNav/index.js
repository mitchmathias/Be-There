import React, {useState, useEffect} from 'react';
import './style.css'
import {Link} from 'react-router-dom';
import MyProfile from '../../MyProfile/index'
import CreateEvent from '../../CreateEvent';
import Feed from "../../Feed/index"

const HomeNav = () => {
    const [click, setClick] =useState(false);
    const [button, setButton ] = useState( true );
    const [tab, setTab] =useState("home"); //by default the page will route to home

//funtion to handle the closing of the nav bar for the mobile
const handleClick = () => {
setClick(!click)
}

const closeMobileMenu = () => {
    setClick(false)
}
const showMenuButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false) //if the screen is less the  it shows the button
    }else{
        setButton(true);
    }
};
useEffect(() => {
    showMenuButton();
})
window.addEventListener('resize', showMenuButton) //adding this for mobile responsive  and demonstration for class 

return(
    <>
      <nav className="navbar">
                <div className="navbar-Container">
                    <Link to="/" className="navbar-logo">
                        Be-There <i className=" fas fa-leaf" />
                    </Link>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*Clicks cycle between the mobile menu X and Hamburger menu */}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to="/planEvents" className="nav-links" onClick={closeMobileMenu}>{tab === 'planEvents' &&
                        <CreateEvent />}Plan an Event
                    </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>{tab === 'profile' &&
                        <MyProfile />}Profile
                    </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/home" className="nav-links" onClick={closeMobileMenu}>{tab === 'feed' &&
                        <Feed />}Discover
                    </Link>
                    </li>
                  
                </ul>
                 {button}   {/*connect this button as a Popper to create event or either    */}
            </nav>
    </>
)


}
export default HomeNav;