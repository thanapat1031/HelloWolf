import React, { Component } from 'react';
import Landing from './component/Landing'
import TimeLine from './component/TimeLine'
import About from './component/About';
import Contact from './component/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <TimeLine/>
        <Contact />
      </div>
    )
  }
}
export default App;