import React from 'react'
import styled from 'styled-components'
import Box from './Box'


const BG = styled.div`
    background-image : url("/img/Timeline.png") ;
    background repeat : no-repeat;
    background-size: cover;
    min-weight: 100vw ;
    min-height: 100vh ;
    text-align: center;
    Font-Family : Kanit;
    z-index : 1 ;
`
<<<<<<< HEAD
=======

>>>>>>> a19cf761fb13b24dfa788232d62e0e5bd3672834
const Font = styled.p`
color : #FFFFFF ;
font-size : 96px;
Font-Family : Kanit;
font-weight: bold;
text-align: center;
padding-top : 100px; 
z-index : 1 ;
`
const FontTitle = styled.p`
color : #FFFFFF ;
font-size : 30px;
Font-Family : Kanit;
font-weight: bold;
text-align: center;
// padding-top : 100px; 
z-index : 1 ;
`
<<<<<<< HEAD
=======





>>>>>>> a19cf761fb13b24dfa788232d62e0e5bd3672834


const TimeLine = () => (
    
    <BG>
        <Font>
             TIME MACHINE
        </Font>
        <div className="row">
            <div className="col-3">
                <Box src="img/wolf.png" />
                <FontTitle>รับสมัคร</FontTitle>
                <FontTitle>13 พฤศจิกายน</FontTitle>
            </div>
            <div className="col-3">
                <Box src="img/wolf.png" />
                <FontTitle>ปิดรับสมัคร</FontTitle>
                <FontTitle>19 พฤศจิกายน</FontTitle> 
            </div>
            <div className="col-3">
                <Box src="img/wolf.png" />
                <FontTitle>ประกาศผล</FontTitle>
                <FontTitle>22 พฤศจิกายน</FontTitle>
            </div>
            <div className="col-3">
                <Box src="img/wolf.png" />
                <FontTitle>วันค่าย</FontTitle>
                <FontTitle>25-27 พฤศจิกายน</FontTitle>
            </div>
        </div>
    </BG>

)
export default TimeLine