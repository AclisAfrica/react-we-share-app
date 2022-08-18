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
import { AddIcon ,HamburgerIcon,ChevronDownIcon} from '@chakra-ui/icons'
import '../App.css';

export default function Passengers() {
   let Pass_desc=[
     {
       id:1,
  Location:"kiosque",
  img:"/images/Line 2.svg",
  
  usersImage:"images/Users.svg",
 
  circle:"images/Time_circle.svg",
  Pending :"Pending",
  pickUp:"confirm",
},{
  id:2,
        
  Location:"kiosque",
  img:"/images/Line 2.svg",

  usersImage:"images/Users.svg",

  circle:"images/Time_circle.svg",
  Pending :"Pending",

},{
  id:3,
  Location:"kiosque",
  img:"/images/Line 2.svg",

  circle:"images/Time_circle.svg",
  Pending :"Pending",
  
},{
 id:4,
  Location:"kiosque",
  img:"/images/Line 2.svg",
 
  circle:"images/Time_circle.svg",
  Pending :"Pending",

}
    ]
  return (
  
     
    <Center>
 <Box className="drop_down">
    <Menu>
  <MenuButton as={Button} leftIcon={<HamburgerIcon/>} rightIcon={<ChevronDownIcon />}
  position="absolute"
  top="40px"
  left="550px"
  width="290px"
  height="62px"
  bg ="white"
border="4px solid rgba(196, 196, 196, 0.2)" 
borderRadius="18px" 
  _hover={{
              bg: 'gray.200',
            }}
              _focus={{
                bg: 'gray.200',
              }}
 >
   Trip
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      
      <span>Fluffybuns the Destroyer</span>
    </MenuItem>
    <MenuItem minH='40px'>
     
      <span>Simon the pensive</span>
    </MenuItem>
  </MenuList>
</Menu>
</Box>
      <Stack
       maxW={'350px'}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        height="837px"
        direction={{ base: 'column', md: 'column' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={9}>
 
          
       {
        Pass_desc.map((data,index)=>(
          <Box className='Pass_desc' key={data.id}>
           
            
            <h3>{data.name}</h3>
            <h1>{data.Location}</h1>

 <Text
 display="flex" 
    flexDirection='row'
    alignItems='center'
   verticalAlign="top"
    width='20rem'
    height= '40px'
    fontStyle='normal'
   fontWeight="600"
   fontSize="16px"
   color="#000000"
   position="relative"
   top="150px"
   left="70px"
  >
  {data.dest}</Text>
      <Image 
      position=" relative"
width="50px" 
height= "25px"
left="-130px" 
top="190px"
      src='images/pic.svg'/>

           
             <Image
              position=" relative"
width="50px" 
height= "25px"
left="-130px" 
top="190px"
              src='images/Time_Circle.svg'/>
           <h4>{data.mins}</h4>
         
  </Box>
        ))
       }
      </Stack>
      
    </Center>
  );
}









