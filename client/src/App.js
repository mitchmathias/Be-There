import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventCard from './components/EventCard';
import CreateEvent from './components/CreateEvent';
import MyProfile from './components/Wrapper';
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
        <Switch>
        <Route exact path='/' component={Landing} />

        <Route path='/signup' render={(props) =>
          <Signup {...props} updateUser={this.updateUser} />
        } />
        <Route path='/login' render={(props) =>
          <Login {...props} updateUser={this.updateUser} />
        } />
  
        {/* Remove Below Later */}
        
        <Route path ='/home' component={Home} />
        
        
        {/* Remove Above Later  */}
        </Switch>
        
      </Router>
    );
  }
}

export default App;
