// import Feed from './components/Feed';
import Footer from './components/Footer';
// import Login from './components/Login';
import Nav from './components/Nav';
// import Search from './components/Search';
// import Signup from './components/Signup';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import EventCard from './components/EventCard';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Title />
        <Nav />
        <EventCard />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
