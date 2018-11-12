import React, { Component } from 'react';
import styled from 'styled-components';

import Landing from './component/Landing'
import TimeLine from './component/TimeLine'
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar' ;
import Location from './component/Location' ;

const Bg = styled.div`
  overflow-x:hidden;
`


class App extends Component {
  render() {
    return (
      <Bg>


        <Navbar />
        <Landing />

         <div id = "About">
          <About />
         </div>

         <div id = "Timeline">
          <TimeLine /> 
         </div>

         <div id = "Location">
           <Location/>
         </div>

         <div id = "Contact">  
          <Contact />
         </div>


      </Bg>
    )
  }
} 
export default App ;