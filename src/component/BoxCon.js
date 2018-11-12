import React from 'react';
import styled from 'styled-components'


const Imgae = styled.img`
height : 75px;
weight : 75px;
`
const Box =(props) => 
(
    <Imgae src={props.src}/>  
    
)

export default Box