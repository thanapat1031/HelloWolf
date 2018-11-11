import React from 'react';
import styled from 'styled-components'


const Img = styled.img`
height : 150px;
weight : 150px;
`


const Box =(props) => 
(
    <Img src={props.src}/>  
    
)

export default Box