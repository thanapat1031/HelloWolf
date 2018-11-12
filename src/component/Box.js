import React from 'react';
import styled from 'styled-components'


const Img = styled.img`
height : 150px;
width : 150px;
z-index : 1 ;
`


const Box =(props) => 
(
    <Img src={props.src}/>  
    
)

export default Box