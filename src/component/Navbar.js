import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #073C5C ;
  height : 90px ;
  width : 100% ;
  position : fixed;
  z-index: 3 ;
  
`

const Topic = styled.h2`
  color: #FFFFFF;
 
`
const A = styled.a`
  color: #FFFFFF;
  font-size : 20px;
  &:hover {
    color: yellow ;
    text-decoration: none ;

}
   
`

const Img = styled.img `
height : 90px ;
width : 90px ;
padding-bottom : 9px ;
` 


 
const Navbar = () => (
  <Nav>
    <nav class="navbar navbar-expand-lg navbar-light ">
    

    <div>
      <Img src = "/img/icon.png" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item pr-1">
            <A class="nav-link " href="#About">ABOUT US</A>
          </li>
          <li class="nav-item pl-3 ">
            <A class="nav-link" href="#Timeline">TIME MACHINCE</A>
          </li>
          <li class="nav-item pl-4 ">
            <A class="nav-link" href="#">LOCATION</A>
          </li>
          <li class="nav-item pl-4 ">
            <A class="nav-link" href="#Contact">CONTACT</A>
          </li>
        </ul>
      </div>



    </nav>
    
   
  
  </Nav>
)

export default Navbar