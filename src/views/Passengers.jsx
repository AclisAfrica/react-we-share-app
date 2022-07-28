import {
  Button,
  Center,
  Image,
  Stack,
  Box,
  Text,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon} from '@chakra-ui/icons'
import '../App.css';

export default function Passengers() {
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
  pickUp:"Pick up",
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
  pickUp:"Pick up",
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
  pickUp:"Pick up",
},{
 id:4,
         Image:"/images/girl.png",
  name:"Erica",
  Location:"kiosque",
  img:"/images/Line 2.svg",
  dest:"KCB",
  usersImage:"images/Users.svg",
  users:"1",
  circle:"images/Time_circle.svg",
  mins:'2mins',
  pickUp:"Pick up",
}
    ]
  return (
    <Center py={6}>
    
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
          <Stack direction="row" >
            <Input placeholder='Route Rumonge' width="500px"  height="38px"/>
            <Input placeholder='CBD Town' width="300px"  height="38px"/>
          </Stack>
          
       {
        Pass_desc.map((data,index)=>(
          <Box className='Pass_desc' key={data.id}>
           
            <Image
           position= "relative"
           left="60px"
           top="140px"
           width=" 48px"
height="48px"
             src={'images/girl.png'}/>
            <h3>{data.name}</h3>
            <h1>{data.Location}</h1>
 <Image
 position="relative"
 top="170px"
 left="10px"
  src='images/Line 2.svg'/>
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
                 bg={'blue.600'}
                 color={'white'}
              fontSize={'sm'}
            _hover={{
              bg: 'blue.400',
            }}
              _focus={{
                bg: 'blue.400',
              }}
            > {data.pickUp}</Button>
  </Box>
        ))
       }
        <Box className="Add_Button">
 <Button leftIcon={<AddIcon/>} colorScheme='gray' variant='solid'
 borderRadius={'80px'}
 width="48px" 
height="48px" 
position="relative"
top="80px"
left="-19px"
paddingRight="10px"

 >
    
  </Button>
        </Box>
      </Stack>
      
    </Center>
  );
}









