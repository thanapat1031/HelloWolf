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

`
const Font = styled.h1`
    color : #FFFFFF ;
    font-size : 96px;
    Font-Family : Kanit;
    font-weight: bold;
    text-align: center;
    height : 1440px;
    padding-top : 150px;
`






const TimeLine = () => (
    
    <BG>
        <div>
        <Font>
             TIME MACHINE
        </Font>
        </div>

        <div className="row">
            <div className="col-3">
                <Box src="img/wolf.png" />
            </div>
            <div className="col-3">
                <Box src="img/wolf.png" />  
            </div>
            <div className="col-3">
                <Box src="img/wolf.png" />
            </div>
            <div className="col-3">
                <Box src="img/wolf.png" />
            </div>
        </div>
</BG>

)
export default TimeLine