import {
  Button,
  Center,
  Image,
  Stack,
  Box,
  Text,
  useColorModeValue,

} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import NavBar from'../Components/NavBar.jsx';
import Header from'../Components/Header.jsx'
import {useState} from 'react';
import '../App.css';

export default function DropOff() {
   const [header, setHeader] =useState([
  {status:'Driving' , status2:'Riding',id:1 },
    {status:'Active' , status2:'Approved',id:2 },
    {status:'Pick-up' , status2:'Drop-off',id:3 },
     {status: 'Email' , status2:'Phone Number', id:4},
]);
   let Pass_desc=[
     {
       id:1,
  Location:"Kiosque",
  img:"/images/Line 2.svg",
  Pending :"2MINS",
 
},{
  id:2,
  Location:"kiosque",
  img:"/images/Line 2.svg",

  usersImage:"images/Users.svg",

  circle:"images/Time_circle.svg",
  Pending :"2MINS",

},{
  id:3,
  Location:"kiosque",
  img:"/images/Line 2.svg",

  circle:"images/Time_circle.svg",
  Pending :"2MINS",
  
},{
 id:4,
  Location:"kiosque",
  img:"/images/Line 2.svg",
  circle:"images/Time_circle.svg",
  Pending :"2MINS",

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
  <Header header={header.filter((data)=> data.status === 'Pick-up')} title="Stops" /> 
          
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
left="-230px" 
top="190px"
      src='images/guy.svg'/>

           
             <Image
              position=" relative"
width="40px" 
height= "20px"
left="-240px" 
top="190px"
color="#000000"
              src='images/Time_Circle.svg'/>
           <h4>{data.Pending}</h4>
        <ChevronDownIcon 
       width="24px"
       height="24px"
 position="relative" 
 left="-80px"
 top="190px"
 gap="10px"/> 
  </Box>
        ))
       }
      </Stack>
    </Center>
  );
}









