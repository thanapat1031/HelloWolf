import React, { Component } from 'react';
import Landing from './component/Landing'
import About from './component/About';
import TimeLine from './component/TimeLine'
import Location from './component/Location'


class App extends Component {
  render() {
    return (
      <div>
        <Landing/>
        <About/>
        <TimeLine/>
        <Location/>
      </div>
    )
  }
}
export default App;