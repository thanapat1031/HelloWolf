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
padding-bottom : 50px;
`
const Img1 = styled.img`
<<<<<<< HEAD
`
=======
paddin-bottom : ;
>>>>>>> cbb8646a45db7f1b28b871567c3c8aed4c49e64f

`
const Img2 = styled.img`
<<<<<<< HEAD
=======

>>>>>>> cbb8646a45db7f1b28b871567c3c8aed4c49e64f
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