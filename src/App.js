import React, { Component } from 'react';
import Landing from './component/Landing';
import About from './component/About';
import TimeLine from './component/TimeLine';
import Location from './component/Location';
import Contact from './component/Contact';
import Navbar from './component/Navbar' ;




class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <TimeLine />
        <Location />
        <Contact />
        <Navbar />
      </div>
    )
  }
}
export default App;