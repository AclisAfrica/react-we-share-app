import {
  Button,
  Center,
  Image,
  Stack,
  Box,
  Text,
  useColorModeValue,
 Menu,
  MenuButton,
  MenuList,
  MenuItem,
  

} from '@chakra-ui/react';
import styled from 'styled-components';
import {ChevronDownIcon} from '@chakra-ui/icons'
import NavBar from'../Components/NavBar.jsx';
import Header from'../Components/Header.jsx'

import '../App.css';


export default function Passengers() {

   let Pass_desc=[
     {
       id:1,
  Location:"Petit Seminaire",
    Pending :"2 Mins",

},{
  id:2,
        
  Location:"Petit seminaire ",
  img:"/images/Line 2.svg",
  Pending :"2 Mins",

},{
  id:3,
  Location:"Kiosque ",
  Pending :"2 Mins",
  
},{
 id:4,
  Location:" Kiosque Menya",
  Pending :" 2 Mins",

}
    ]
  return (
    <Container>
       <Center>
      <Stack
       maxW={'390px'}
        w={'full'}
        height="837px"
        direction={{ base: 'column', md: 'column' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={9}>
 <NavBar/>
      <Header  title="Stops" />      
      <div>
  < input  type="checkbox" className="toggle_2"/>
</div>

       {
        Pass_desc.map((data)=>(
          <Box className='Pick_desc' key={data.id}>
            <h1 >{data.Location}</h1>
            <img  src='images/guy.svg'/>
             <img src='images/Time_Circle.svg'/>
             <h4 >{data.Pending}</h4>
           
        <Menu>
  <MenuButton as={Button} 
    width="24px"
       height="70px"
 position="relative" 
 left="30px"
 top="0px"
 gap="10px"
color="black"
bg=" "
colorScheme=" "
  _hover={{
              bg: '#aee8ce',
            }}
  rightIcon={<ChevronDownIcon />}>
     
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  </Box>
        ))
       }
      </Stack>
    </Center>
    </Container>
  );
}
const Container= styled.div`
.Pick_desc{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
 position:relative;
 top:55px;
 left:-15px;
    width: 300px;
    height: 70px;
    border-radius: 8px;
    h1{
width: 119px;
height: 20px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 125%;
color: #000000;
    }
   
  img{
padding: 2px;
width: 28px;
height: 28px;
border-radius: 32px;
position:relative;
top:35px;
left:-120px;
  }
  h4{
    position:relative;
    top:40px;
    left:-115px;
width: 73px;
height: 18px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 125%;
text-transform: uppercase;
color: #000000;
  }
}
.Pick_desc:hover {
  background-color: #aee8ce;
}
.toggle_2 {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 290px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  top:10px;
  left:0px;
  outline: none;
}
.toggle_2:before {
  content: "Pick-up ";
  background: #36AE7C;
  font-size: 1 rem;
  height: 50px;
  width: 45%;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 10%;
  top: 0%;
  left: 0%;
}
.toggle_2:after {
  content: "Drop_off ";
  position: absolute;
  font-size: 1 rem;
  font-weight: 700;
  top: 50%;
  left: 70%;
  transform: translate(20%, -50%);
}
.toggle_2:checked:before {
  display: flex;
  align-items: center;
  justify-content: center;
  content: 'Drop-Off';
  left: 55%;
  color: white;
}
.toggle_2:checked:after {
  content: 'Pick-up';
  left: 0;
}
`