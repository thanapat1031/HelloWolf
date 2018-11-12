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
height : 728px ;
width : 1200px ;
border-radius: 35%;
background-color : rgba(0,0,0,0.3);
`

const ImgWolf = styled.img`     
div.bigGallPic{   
    position:fixed;   
    margin:auto;   
    top:150px;   
    left:150px;   
    padding:3px;   
    text-align:center;   
    background-color:#FFFFFF;   
    border:5px solid #666666;   
    display:none;   
    cursor:pointer;   
}   
`


const  Location  = () => (
    <Bg>
        <Font>LOCATION</Font>
        <Img src='/img/map.png'height ="728" width="1202"/>
        <ImgWolf src='/img/iconlocation.png' alt="smile" id="imgSmile"/>
    </Bg>
)



export default Location;