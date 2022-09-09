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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,


} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import NavBar from'../Components/NavBar.jsx';
import Header from'../Components/Header.jsx'

import '../App.css';
import Test from '../Components/Test.jsx';

export default function Passengers() {

   let Pass_desc=[
     {
       id:1,
  Location:"Petit Seminaire",
  img:"/images/Line 2.svg",
  usersImage:"images/Users.svg",
  circle:"images/Time_circle.svg",
  Pending :"Pending",
  pickUp:"confirm",
},{
  id:2,
        
  Location:"Petit seminaire ",
  img:"/images/Line 2.svg",
  usersImage:"images/Users.svg",
  circle:"images/Time_circle.svg",
  Pending :"Pending",

},{
  id:3,
  Location:"Kiosque sangwe",
  img:"/images/Line 2.svg",
  circle:"images/Time_circle.svg",
  Pending :"Pending",
  
},{
 id:4,
  Location:"International",
  img:"/images/Line 2.svg",
  circle:"images/Time_circle.svg",
  Pending :" 2Pending",

}
    ]
  return (
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
      <Box>
  < input  type="checkbox" className="toggle_4"/>
</Box>

       {
        Pass_desc.map((data)=>(
          <Box className='Pass_desc' key={data.id}>
            <h3>{data.name}</h3>
            <h1>{data.Location}</h1>

      <Image 
      position=" relative"
width="50px" 
height= "25px"
left="-240px" 
top="190px"

      src='images/guy.svg'/>

           
             <Image
              position=" relative"
width="30px" 
height= "20px"
left="-240px" 
top="193px"
              src='images/Time_Circle.svg'/>
           <h4>{data.Pending}</h4>
        <Menu>
  <MenuButton as={Button} 
    width="24px"
       height="24px"
 position="relative" 
 left="-80px"
 top="190px"
 gap="10px"
  
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
  );
}









