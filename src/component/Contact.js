import React from 'react' 
import styled from 'styled-components'
import BoxCon from './BoxCon'

const Bg = styled.div `
background-image : url("/img/BGCon.png") ;
min-height : 100vh ;
width : 100vw ;
overflow-x: hidden;
text-align: center;
background repeat : no-repeat;
background-size: cover;
z-index : 1 ;
font-family : Kanit ;
`
const Topic = styled.h2 `
color : #FFFFFF ;
font-size : 96px ;
font-family : Kanit ;
font-weight : bold ;
text-align : center;
height : 144px ;
padding-top : 150px ;
padding-bottom : 150px ;
`
const Font = styled.h1`
padding-top : 150px ;
margin-right : 20px ;
`
const FontTitle = styled.p`
color : #FFFFFF ;
font-size : 30px;
/* Font-Family : Kanit; */
font-weight: bold;
text-align: center;
padding-top : 50px; 
`

const Pic = styled.img`
height: 75px;
width: 75px;
`
const Table = styled.div`
padding-top : 150px ;
padding-bottom : 150px ;
margin-left : 40px ;
`
const Fontline = styled.h3`
color : #FFFFFF ;
font-size : 30px;
/* Font-Family : Kanit; */
font-weight: bold;
text-align: center;
padding-right : 250px; 
`

const Contact = () => (
    <Bg>
        <Topic>
            CONTACT
        </Topic>
   <Table>
           <table>
               <tr>
                   <td>
                        <Pic src="img/facebook.png"></Pic>
                   </td>
                   <td>
                <Fontline> : Wolf Camp #1 </Fontline>
                </td>
               </tr>
           </table>
           <table>
               <tr>
                   <td>
                        <Pic src="img/Tel.png"></Pic>
                   </td>
                   <td>
                <Fontline> : 02-107-3576</Fontline>
                </td>
               </tr>
           </table>
           <table>
               <tr>
                   <td>
                        <Pic src="img/From.png"></Pic>
                   </td>
                   <td>
                <Fontline> : Wolfcamp@gmail.com</Fontline>
                </td>
               </tr>
           </table>
    </Table>
    
                {/* <img src="img/iconwolf.png" alt="picture" height="276" width="464"></img> */}
                
    </Bg>
)


export default Contact 



  {/* <Font>
                <div className="row">
                    <div className="col-3">
                        <BoxCon src="img/facebook.png" />
                    </div> 
                    <div className="col-3">
                        <FontTitle>: Wolf Camp #1</FontTitle>    
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <BoxCon src="img/Tel.png" />
                    </div> 
                    <div className="col-3">
                        <FontTitle>: 02-107-3576</FontTitle>    
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <BoxCon src="img/From.png" />
                    </div> 
                    <div className="col-3">
                        <FontTitle>: Wolfcamp@gmail.com</FontTitle>    
                    </div>
                </div>
        </Font> */}