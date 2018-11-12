import React, { Component } from 'react';
import Landing from './component/Landing'
import TimeLine from './component/TimeLine'
import About from './component/About';
import TimeLine from './component/TimeLine';
import Location from './component/Location';
import Contact from './component/Contact';
import Navbar from './component/Navbar' ;
import Location from './component/Location' ;


class App extends Component {
  render() {
    return (
      <div>


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


      </div>
    )
  }
} 
export default App ;