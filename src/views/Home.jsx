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
import { HamburgerIcon,PlusSquareIcon} from '@chakra-ui/icons'
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

           <Stack align={'center'} justify-content={'space-between'} direction={'row'} mt={6} gap="190px"  >
            <Box className="user_profil " >
         <Image src={'images/girl.png'}/>
         <Text
          width="60px" 
height="30px" 
fontStyle="normal" 
fontWeight="400" 
fontSize="20px" 
lineHeight="155%" 
textAlign="center" 
color="#C4C4C4" 

         >Jean</Text>
          </Box>
          <Box className="hamburger">
<HamburgerIcon />
          </Box>
        </Stack>
        <Stack direction=" row" gap= "100px">
          <Box className="Driver">
         <Button colorScheme='' variant='link'
         width="63px" 
height="23px" 
  fontStyle="normal" 
    fontHeight="600" 
    fontSize="20px"
    lineHeight="150%" 
    paddingTop="50px"
 
           _hover={{
textDecorationColor:'blue',
paddingBottom:'20px',
  paddingRight:'60px',
  paddingLeft:'70px',
borderBottom: ' 4px solid #2B4BF2',
         
            }}
        >
    Driver
  </Button>

          </Box>
             <Box className="Rider">
                   <Button colorScheme='' variant='link'
                           width="63px" 
height="23px" 
  fontStyle="normal" 
    fontHeight="600" 
    fontSize="20px"
    lineHeight="150%"
    paddingTop="50px"

           _hover={{
         

textDecorationColor:'blue',
paddingBottom:'20px',
    paddingRight:'60px',
  paddingLeft:'70px',
borderBottom: ' 5px solid #2B4BF2',
         
            }}
        >
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
 <Box className="Add_stops">
  <p>Add Stop</p>
  <PlusSquareIcon
  width="24px" 
height="20px" 
/>

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
      <Button colorScheme='blue'>3</Button>
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
            bg={'blue.500'}
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
              bg: 'blue.400',
            }}
            _focus={{
              bg: 'blue.400',
            }}>
           Submit
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}