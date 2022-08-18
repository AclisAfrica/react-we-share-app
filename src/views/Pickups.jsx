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

export default function Pickups() {
   let Pass_desc=[
     {
       id:1,
         Image:"/images/girl.png",
  name:"Erica",
  Location:"kiosque",
  img:"/images/Line 2.svg",
  dest:"KCB ",
  usersImage:"images/Users.svg",
  users:"1",
  circle:"images/Time_circle.svg",
  mins:"2mins",
  confirm:"confirm",
},{
  id:2,
         Image:"/images/girl.png",
  name:"Erica",
  Location:"kiosque",
  img:"/images/Line 2.svg",
  dest:"KCB",
  usersImage:"images/Users.svg",
  users:"1",
  circle:"images/Time_circle.svg",
  mins:"2mins",
  confirm:"confirm",
},{
  id:3,
         Image:"/images/girl.png",
  name:"Erica",
  Location:"kiosque",
  img:"/images/Line 2.svg",
  dest:"KCB",
  usersImage:"images/Users.svg",
  users:"1",
  circle:"images/Time_circle.svg",
  mins:"2mins",
  confirm:"confirm",
},{
 id:4,
        
  name:"Erica",
  Location:"kiosque",
  img:"/images/Line 2.svg",
  dest:"KCB",
  usersImage:"images/Users.svg",
  users:"1",
  circle:"images/Time_circle.svg",
  mins:'2mins',
  confirm:"confirm",
}
    ]
  return (
  
     
    <Center>
 
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
 
          <Box className="drop_down">
    <Menu>
  <MenuButton as={Button} leftIcon={<HamburgerIcon/>} rightIcon={<ChevronDownIcon />}
  position="absolute"
  top="40px"
  left="550px"
  width="290px"
  height="52px"
   bg ={'#2B4BF2'}
border="4px solid rgba(196, 196, 196, 0.2)" 
borderRadius="18px" 
  _hover={{
              bg: 'blue.300',
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
       {
        Pass_desc.map((data,index)=>(
          <Box className='Trip_desc' key={data.id}>
           
           
           
            <h1>{data.Location}</h1>


      <Image 
      position=" relative"
width="50px" 
height= "25px"
left="-130px" 
top="190px"
      src='images/Users.svg'/>

             <h5>{data.users}</h5>
             <Image
              position=" relative"
width="50px" 
height= "25px"
left="-130px" 
top="190px"
              src='images/Time_Circle.svg'/>
           <h4>{data.mins}</h4>
           <Button
           padding="20px 40px" 
width= "250px"
height= "30px"
borderRadius="80px"
position="relative"
    left="-120px" 
top="180px" 
bg={'#9F22B9'}         
            
                 color={'white'}
              fontSize={'sm'}
            _hover={{
              bg: 'blue.400',
            }}
              _focus={{
                bg: 'blue.400',
              }}
            > {data.confirm}</Button>
  </Box>
        ))
       }
    
      </Stack>
      
    </Center>
  );
}









