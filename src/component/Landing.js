import React from 'react'
import styled from 'styled-components'



const Bg = styled.div`
background-image : url("/img/landing.png") ;
font-family : Kanit ;
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
min-height: 100vh;
text-align : center;
`

const Font = styled.h1`
font-weight: bold;
font-size: 150px;
color : #FFFF;
padding-top : 100px;
height: 299px;
`
const Img = styled.img`
padding-bottom : 50px;
`
const Img1 = styled.img`
float : right ;

`



const Img2 = styled.img`
float : right ;

`
// const ImgIcon = styled.img`
// padding-right :  30px;
// margin-left : 1150px;
// `

const Area = styled.div `
padding-bottom : 115px ;
`


const Landing = () => (
    <Bg>
        <Font>WOLF CAMP</Font>
        <div>
            <Img src='/img/Iconlanding.png' />
        </div>
        <Area className ="Landing-imgicon ml-auto pr-5 ">
            <Img1 src='/img/Group2.png ' />
            <Img2 src='/img/Group.png' />
        </Area>
    </Bg>
)





export default Landing