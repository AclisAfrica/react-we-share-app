import {
  Button,
  Center,
  Image,
  Stack,
  Box,
  Text,
  useColorModeValue,
  VStack,


} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import NavBar from'../Components/NavBar.jsx';
import Test from'../Components/Test.jsx';
import '../App.css';

import Header from'../Components/Header.jsx'

export default function DropOff() {
  
let Pass_desc=[
     {
       id:1,
  Location:"centre ville",
  img:"/images/Line 2.svg",
  Pending :"ONBOARD",
 
},{
  id:2,
  Location:"korosi",
  Pending :"ONBOARD",

},{
  id:3,
  Location:"Parque",
  img:"/images/Line 2.svg",
  Pending :"ONBOARD",
  
},{
 id:4,
  Location:"Mutuel",
  img:"/images/Line 2.svg",
  Pending :"ONBOARD",

}
    ]
        
  return (
    <Center >
       
      <Box className="Card"
        maxW={'390px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
      
        textAlign={'center'}>

         
    <NavBar/>  
      <Header  title="Trip" />
      <Box>
  < input  type="checkbox" className="toggle_2"/>
</Box>

<Test/>

        {
        Pass_desc.map((data)=>(
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
left="-250px" 
top="190px"
      src='images/guy.svg'/>
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
  




       

     
      </Box>
    </Center>
  );
}
