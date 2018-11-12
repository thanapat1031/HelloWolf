import React, { Component } from 'react';
import Landing from './component/Landing'
<<<<<<< HEAD
import About from './component/About';
import TimeLine from './component/TimeLine'
import Location from './component/Location'
=======
import TimeLine from './component/TimeLine'
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar' ;

>>>>>>> cbb8646a45db7f1b28b871567c3c8aed4c49e64f



<<<<<<< HEAD
=======

>>>>>>> a19cf761fb13b24dfa788232d62e0e5bd3672834
class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Landing/>
        <About/>
        <TimeLine/>
        <Location/>
=======

        <Navbar />

        <Landing />
<<<<<<< HEAD
        <About />
        <TimeLine/>
        <Contact />
=======

         <div id = "About">
          <About />
         </div>

         <div id = "Timeline">
          <TimeLine /> 
         </div>

         <div id = "Contact">  
          <Contact />
         </div>

>>>>>>> a19cf761fb13b24dfa788232d62e0e5bd3672834
>>>>>>> cbb8646a45db7f1b28b871567c3c8aed4c49e64f
      </div>
    )
  }
}
export default App;