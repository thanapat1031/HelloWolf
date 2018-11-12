import React from 'react'
import styled from 'styled-components'


const Bg = styled.div`
background-image : url("/img/location.png") ;
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
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
height : 500px ;
border-radius: 35%;
padding-left : 33px;
margin-right : 500px;
background-color : rgba(0,0,0,0.2);
`

const ImgWolf = styled.img`     
height : 165px;
margin-left: -790px;
margin-top:-300px;  
`


const  Location  = () => (
    <Bg>
        <Font>LOCATION</Font>
        <div>
        <Img src='/img/map.png'/>
        <ImgWolf src='/img/iconlocation.png'/>
        </div>
    </Bg>
)



export default Location;