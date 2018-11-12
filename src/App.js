import React, { Component } from 'react';
import Landing from './component/Landing'
import TimeLine from './component/TimeLine'
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar' ;


class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Landing />
        <About />
        <TimeLine/>
        <About />
        <TimeLine />
        <Contact />

      </div>
    )
  }
}
export default App;