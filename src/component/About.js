import React from 'react'
import styled from 'styled-components'

const Bg = styled.div `
background-image : url("/img/about.jpg") ;
min-height : 100vh ;
width : 100vw ;
overflow-x: hidden;
`

const Ab = styled.h1 `
color : #FFFFFF ;
font-size : 96px ;
font-family : Kanit ;
font-weight : bold ;
text-align: center;
height : 144px ;
`
const Img = styled.img`
    width: 200px ;   
    height: 200px ;
`

const Blog = styled.div `
background-color : black ;
opacity: 0.5 ;


`

const P1 = styled.p `
font-size : 20px ;
font-weight : bold ;
color : #FFFFFF ;
`


const About = () => (
    <Bg>
        <div className="d-flex justify-content-center align-items-center">
            <Ab>ABOUT US</Ab>
            <Img src = "/img/wolfblack.png"/>
        </div>

        <Blog> 

           <P1>
              ค่ายเส้นทางสู่ฝันนักไอที (Wolf Camp) คือ ค่ายสำหรับน้อง ๆ  ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง  
            ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นเวลา 3 วัน 2 คืน           
           </P1>

           <P1>
         
              Wolf Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน 

           </P1>
            
        </Blog>
            
               
    </Bg>
)

export default About