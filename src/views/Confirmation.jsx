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
import { HamburgerIcon, ChevronDownIcon, CheckIcon,SmallCloseIcon} from '@chakra-ui/icons'
import NavBar from'../Components/NavBar.jsx';
import '../App.css';

export default function Confirmation() {
   let Pass_desc=[
     {
       id:1,
         Image:"/images/girl.png",
  name:"Erica",
 Dest:"Kiosque",

},{
  id:2,
 Image:"/images/girl.png",
  name:"Erica",
  Dest:"kiosque",
 
},{
  id:3,
 Image:"/images/girl.png",
  name:"Erica",
Dest:"Kiosque",
},{
 id:4,
         Image:"/images/girl.png",
  name:"Erica",
  Dest:"Kiosque",

}
    ]
  return (
    
    <Center py={6} >
      
      <Box className="Card"
       maxW={'390px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
   
        p={9}
        textAlign="center">

<NavBar/>


          
       {
        Pass_desc.map((data,index)=>(
          <Box className='Req_desc' key={data.id}>
           
            <Image
           position= "relative"
           left="-10px"
           top="140px"
           width=" 48px"
height="48px"
             src={'images/girl.png'}/>
            <h3>{data.name}</h3>
            <h1>{data.Dest}</h1>
 <Button colorScheme='gray' leftIcon={<SmallCloseIcon/>} variant='solid'
 borderRadius={'80px'}
 width="48px" 
height="38px" 
position="relative"
top="145px"
left="-34px"
paddingRight="10px"
bg="#FFFFFF" 
border="2px solid #9F22B9"
 >
  </Button>  
          <Button colorScheme=''  leftIcon={<CheckIcon/>} variant='solid'
 borderRadius={'80px'}
 width="48px" 
height="38px" 
position="relative"
top="145px"
left="-32px"
bg={'#9F22B9'}
paddingRight="10px">
    
  </Button>
  </Box>
        ))
       }
      
   
        
      </Box>
      
    </Center>
  );
}









