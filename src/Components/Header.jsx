import {
  Box,
  Stack,
} from '@chakra-ui/react';
import {useState} from 'react';
import '../App.css';
import styled from 'styled-components';
import { Switch , FormLabel, FormControl} from '@chakra-ui/react'


const Header=(props)=>{
    /** when you don't want to declare the header all over again and you you want to make it useful you use props  */
   const header=props.header;
const title=props.title;





    return(
  <Container>
    <Box className="header_list">
        <p className="header_title">{title}</p>



<Box>
  < input  type="checkbox" className="toggle"/>
</Box>
  </Box>
  </Container>
        
    

    );

    }

    const Container= styled.div`
    .header_desc {
display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 24px;
  width: 342px;
  height: 82px;
  position: relative;
  left: 60px;
}


.header_title{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
    gap: 10px;
    width: 342px;
    height: 23px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 125%;
    text-align: center;
    text-transform: uppercase;
    color: #36AE7C;
    
}
.toggle{
   appearance: none;
   -webkit-appearance: none;
   -moz-appearance:none;
   width: 250px;
   height:50px;
   background-color:white;

   
   border-radius:15px;
   position: relative;
   outline:none;
}

.toggle:before{
content:"Driving ";
  background: #36AE7C;
  font-size: 1 rem;
  height: 50px;
  width: 45%;
  color:white;
  font-weight:700;
  display:flex;
  align-items: center;
  justify-content: center;
  position : absolute;
  border-radius: 10%;
top: 0%;
left:0%;
}

.toggle:after{
content:"Riding ";
position: absolute;
font-size: 1 rem;
font-weight:700;
top:50%;
left:70%;
transform:translate(20%,-50%);
}

.toggle:checked:before{
  display:flex;
  align-items: center;
  justify-content: center;
  content:'Riding';
  left:55%;
  color: white;
  
}
.toggle:checked:after{
  content:'Driving';
  left:0;

}
    `
   
export default Header;