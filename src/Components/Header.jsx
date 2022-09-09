import {
  Box,
  Stack,
} from '@chakra-ui/react';
import {useState} from 'react';
import '../App.css';
import styled from 'styled-components';



const Header=(props)=>{
    /** when you don't want to declare the header all over again and you you want to make it useful you use props  */
const title=props.title;





    return(
  <Container>
    <Box className="header_list">
        <p className="header_title">{title}</p>
 </Box>


 
  </Container>
        
    

    );

    }

    const Container= styled.div`

    `
   
export default Header;