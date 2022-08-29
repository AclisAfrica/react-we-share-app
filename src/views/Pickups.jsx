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
import '../App.css';

export default function Passengers() {
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
 <Text
  width=" 95px"
height="23px" 
fontFamily= 'Inter'
fontStyle="normal" 
fontWeight="400" 
fontSize="18px" 
lineHeight="125%"
textAlign="center" 
textTransform="uppercase" 
color="#36AE7C" 
position="relative"
left="95px"
Top=""
 >Stop</Text>
  <Stack direction="row" >
          <Box className="Active">
<Button
colorScheme=''
 mt={25.5}  
 ml={10}
 variant='link' 
  _hover={{
              color: '#36AE7C',
            }}
           >
        Pick-up
          </Button>
          </Box>
<Box className="Approved">
<Button 
mt={15.5}
ml={10}
            w={'full'}
            bg={'#36AE7C'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            width={'143px'}
            height={'50px'}
            _hover={{
              bg: 'green.400',
             
            }}
            _focus={{
              bg: 'green.200',
            }}
>
  Drop-off
  </Button>
</Box>
        </Stack>
          
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
      </Stack>
    </Center>
  );
}








