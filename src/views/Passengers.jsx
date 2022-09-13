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
    Pending :"Pending",

},{
  id:2,
        
  Location:"Petit seminaire ",
  img:"/images/Line 2.svg",
  Pending :"Pending",

},{
  id:3,
  Location:"Kiosque sangwe",
  Pending :"Pending",
  
},{
 id:4,
  Location:" Kiosque Menya",
  Pending :" 2Pending",

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
      <Header  title="Request" />      
      <div>
  < input  type="checkbox" className="toggle_4"/>
</div>

       {
        Pass_desc.map((data)=>(
          <Box className='Pass_desc' key={data.id}>
            <h1 className="location">{data.Location}</h1>
            <img  src='images/guy.svg'/>
             <img src='images/Time_Circle.svg'/>
             <h4 >{data.Pending}</h4>
           
        <Menu>
  <MenuButton as={Button} 
    width="24px"
       height="80px"
 position="relative" 
 left="30px"
 top="0px"
 gap="10px"
color="black"
bg=" "
colorScheme=" "
  _hover={{
              bg: '#eef2e6',
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
.Pass_desc{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
 position:relative;
 top:50px;
 left:-20px;
    width: 300px;
    height: 80px;
    border-radius: 8px;
   
  img{
padding: 2px;
width: 28px;
height: 28px;
border-radius: 32px;
position:relative;
top:35px;
left:-100px;
  }
  h4{
    position:relative;
    top:40px;
    left:-95px;
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

.Pass_desc:hover {
  background-color: #EEF2E6;
}
`








