import React from 'react'
import styled from 'styled-components'



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
 Height: 299px;
`
const Img = styled.img`
padding-bottom : 100px;
`
// const ImgIcon = styled.img`
// padding-right :  30px;
// margin-left : 1150px;
// `

const Landing = () => (
    <Bg>
        <Font>WOLF CAMP</Font>
        <div>
            <Img src='/img/Iconlanding.png' />
        </div>
        <div className ="Landing-imgicon ml-auto pr-5">
            <img src='/img/Group2.png' />
            <img src='/img/Group.png' />
        </div>
    </Bg>
)





export default Landing