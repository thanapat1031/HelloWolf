import React from 'react' 
import styled from 'styled-components'
import Boxcontent from './BoxContact'

const Bg = styled.div `
background-image : url("/img/1.jpg") ;
min-height : 100vh ;
weight : 100vw ;
overflow-x: hidden;
text-align: center;
background repeat : no-repeat;
background-size: cover;
z-index : 1 ;
`

const Topic = styled.h2 `
color : #FFFFFF ;
font-size : 96px ;
font-family : Kanit ;
font-weight : bold ;
text-align : center;
height : 144px ;
padding-top : 85px ;
`

const Img = styled.img `

`

const Contact = () => (
    <Bg>
        <Topic>
            CONTACT
        </Topic>

        <div>

        <img src = "/img/iconwolf.png"/>

    
       </div>

    </Bg>
)


export default Contact 


