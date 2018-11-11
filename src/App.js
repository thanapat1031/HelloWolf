import React, { Component } from 'react';
import Landing from './component/Landing'
import About from './component/About';


class App extends Component {
  render() {
    return (
      <div>
        <Landing />

        <About/>

      </div>
    )
}
}
export default App;