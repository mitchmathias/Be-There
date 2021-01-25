import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import LandingNav from './components/Navs/LandingNav'
import Landing from './pages/landing'
import Home from './pages/home'
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import axios from 'axios'
import HomeNav from './components/Navs/HomeNav'
import Welcome from './components/Welcome'
import Footer from './components/Footer'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {}
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  getUser() {
    axios.get('api/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: {}
        })
      }
    })
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(user) {
    this.setState(user)
  }

  render() {

    return (
      // <Router>
      //   <Wrapper>
      //     <Landing />
      //   </Wrapper>
      // </Router>

      <Router>
        <Welcome />
        <LandingNav />
        <Route path='/signup' render={(props) =>
          <Signup {...props} updateUser={this.updateUser} />
        } />
        <Route path='/login' render={(props) =>
          <Login {...props} updateUser={this.updateUser} />
        } />

        {/* <Route path='/signup' exact component={Signup} />
            <Route path='/login' exact component={Login} /> */}

        {/* Remove Below Later */}

        {/* <HomeNav /> */}
        {/* <Route exact path='/events' component={EventCard} />
        <Route exact path='/planEvents' component={CreateEvent} />
        <Route exact path='/myProfile' component={MyProfile} /> */}

        {/* Remove Above Later  */}

        <Footer />
      </Router>
    );
  }
}

export default App;
