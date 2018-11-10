import React from 'react'
import styled from 'styled-components'
// import Image from './bg-landing.png'



const Bg = styled.div`
background-image : url("/img/landing.png") ;
background-repeat: no-repeat;
background-size: cover;
weight: 100vw;
min-height: 100vh;
text-align : center;
`

const Font = styled.h1`
font-weight: bold;
font-size: 150px;
color : #FFFF;
padding-top : 100px;
Line Height: 299px;
`
const Img = styled.img`
padding-bottom : 50px
`

const Img1 = styled.img`
// margin-right : 2000px
// padding-right : px
`

const Img2 = styled.img`
`

const Landing = () => (
    <Bg>
        <Font>WOLF CAMP</Font>
        <Img src='/img/Iconlanding.png'/>
        <Img1 src='/img/Group2.png'/>
        <Img2 src='/img/Group.png'/>
    </Bg>
)






export default Landing