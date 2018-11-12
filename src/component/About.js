import React from 'react'
import styled from 'styled-components'

const Bg = styled.div `
background-image : url("/img/about.jpg") ;
min-height : 100vh ;
width : 100vw ;
text-align: center;
background repeat : no-repeat;
background-size: cover;
font-family : Kanit ;
`

const Ab = styled.h1 `
color : #FFFFFF ;
font-size : 80px ;
font-family : Kanit ;
font-weight : bold ;
text-align : center;
height : 140px ;
`
const Img = styled.img`
    width: 200px ;   
    height: 200px ;
`

const Blog = styled.div `
background-color : rgba(0,0,0,.5) ;

`

const P1 = styled.h2 `
Font-Family : Kanit;
font-size : 31px ;
font-weight : bold ;
color : #FFFFFF ;
text-align : center ;
`

const Topic = styled.div `
padding-top : 70px ;
font-size : 96 ;
`


const About = () => (
    <Bg>
        <Topic className="d-flex justify-content-center align-items-center">
            <Ab>ABOUT US</Ab>
            <Img src = "/img/wolfblack.png"/>
        </Topic>

        <Blog className="container p-5"> 

           <P1 className="m-2">
              ค่ายเส้นทางสู่ฝันนักไอที (Wolf Camp) คือ ค่ายสำหรับน้อง ๆ <br/> 
                ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง <br/> 
            ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นเวลา 3 วัน 2 คืน           
           </P1>

           <P1 className="mt-5 mx-2 mb-3">
         
              Wolf Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ <br/>
               ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน 

           </P1>
            
        </Blog>
            
               
    </Bg>
)

export default About