import React from 'react'
import styled from 'styled-components'


const Bg = styled.div`
background-image : url("/img/location.png") ;
background-repeat: no-repeat;
background-size: cover;
weight: 100vw;
min-height: 100vh;
text-align : center;
`

const Font = styled.h1`
color : #FFFF;
Font-Family : Kanit;
font-size : 90px;
font-weight: bold;
`
const Img = styled.img`
height : 550px ;
border-radius: 35%;
background-color : rgba(0,0,0,0.3);
margin-right : 400px;

`

const ImgWolf = styled.img`     
height : 165px;
margin-left: -700px;
margin-top:-300px;  
`


const  Location  = () => (
    <Bg>
        <Font>LOCATION</Font>
        <Img src='/img/map.png'/>
        <ImgWolf src='/img/iconlocation.png'/>
    </Bg>
)



export default Location;