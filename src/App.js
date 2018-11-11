import React, { Component } from 'react';
import Landing from './component/Landing'
import About from './component/About';
import Contact from './component/Contact' ;


class App extends Component {
  render() {
    return (
      <div>
        <Landing />

        <About/>

        <Contact/>

      </div>
    )
}
}
export default App;