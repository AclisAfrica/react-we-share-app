import {
  Box,
  Center,
  Stack,
  Button,
 Wrap,
 WrapItem,
  Text,
Image,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import NavBar from'../Components/NavBar.jsx';
import '../App.css';

export default function Home() {

  return (
    <Center py={6}>
      
      <Box className="Card"
        maxW={'390px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>

           <NavBar/>
         
      <Box>
<Text

 width="100px" 
height="23px" 

fontFamily= 'Inter'
fontStyle="normal" 
fontSize="19px"
lineHeight="125%" 
textAlign="center" 
textTransform="uppercase" 
color="#36AE7C"
 >
  Trip
</Text>

        </Box>
        <Stack direction=" row" gap= "100px" mt="40px" ml="-30px">
          <Box className="Driver">
        <Button
            mt={-3.5}
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
            }}>
          Driver 
          </Button>
          </Box>
<Box className="Rider">
<Button colorScheme='' variant='link' 
position="relative"
top="-5px"
left="-5px"
  _hover={{
              color: '#36AE7C',
            }}>
   Rider
  </Button>

          </Box>
        </Stack>
        <Stack direction="column" gap="10px" >
          <Box className="origin_Destination">
     <Select placeholder='Origin'
     display="flex" 
flexDirection="row" 
alignItems="center" 
padding="0px"
width="342px" 
height="62px" 
border="4px solid rgba(196, 196, 196, 0.2)" 
borderRadius="18px"  >

  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>

      <Box className="origin_Destination">
     <Select placeholder='Destination'
     display="flex" 
flexDirection="row" 
alignItems="center" 
padding="0px"
width="342px" 
height="62px" 
border="4px solid rgba(196, 196, 196, 0.2)" 
borderRadius="18px"  >

  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>
</Stack>

<Stack direction="row"  gap="60px">
  <Stack direction="row">
        <Box className="date">
<Image 
position="relative"
top="20px"
src='images/date.svg'/>
</Box>
<Box className="date_desc">
<h5>Date</h5>
<h1>Mon,25 jul</h1>
</Box>
  </Stack>

<Stack direction="row" >
       <Box className="date">
<Image 
position="relative"
top="20px"
src='images/Circle.png'/>
</Box>
<Box className="date_desc">
<h5>Time</h5>
<h1>7:30 - 8:00 a.m</h1>
</Box>
     </Stack>   
</Stack>
<Stack>
 <Box className="number_section">
<h5> Number of seats</h5>
 <Wrap spacing={4} >
    <WrapItem>
      <Button colorScheme='gray'>1</Button>
    </WrapItem>
      <WrapItem>
      <Button colorScheme='gray'>2</Button>
    </WrapItem>
      <WrapItem>
      <Button colorScheme='' bg={'#36AE7C'}
      >3</Button>
    </WrapItem>
      <WrapItem>
      <Button colorScheme='gray'>4</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='gray'>5</Button>
    </WrapItem>
    </Wrap>
 </Box>
</Stack>

       

        <Stack mt={8} direction={'row'} spacing={4}>
          
          <Button
           
            fontSize={'sm'}
            bg={'#36AE7C'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
        
            display={ 'flex'}
justify-content={'center'} 
alignItems={'center'} 
padding= {'12px 50px'}
width= {'350px'}
height= {'56px'}
borderRadius={'20px'} 
position="relative"
top="40px"
            _hover={{
              bg: 'green.400',
            }}
            _focus={{
              bg: 'green.400',
            }}>
           Submit
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}