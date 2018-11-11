import React, { Component } from 'react';
import Landing from './component/Landing'
import TimeLine from './component/TimeLine'
import About from './component/About';


class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About/>
        <TimeLine/>
      </div>
    )
}
}
export default App;