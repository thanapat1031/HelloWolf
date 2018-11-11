import React, { Component } from 'react';
import Landing from './component/Landing'
import TimeLine from './component/TimeLine'
import Box from './component/Box'


class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <TimeLine/>
        <Box/>
      </div>
    )
}
}
export default App;