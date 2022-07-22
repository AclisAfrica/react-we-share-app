import {
  Box,
  Center,
  Stack,
  Button,
 Wrap,
 WrapItem,
  Badge,
  useColorModeValue,
  Input,
 
} from '@chakra-ui/react';
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

           <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Box className="timing " >
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('white.50', 'white.800')}
            fontWeight={'400'}
            >
           <img src='images/Moon.png'/>
           <h5>6:30-7:30</h5>
           <Button colorScheme=''  variant='link'>
    Morning
  </Button>
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('white.50', 'white.800')}
            fontWeight={'400'}>
            <img src='images/sun.png'/>
           <h5>12:30-14:30</h5>
           <Button colorScheme='' variant='link'>
    Afternoon
  </Button>
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('white.50', 'white.800')}
            fontWeight={'400'}
           >
                 <img src='images/sunset.svg'/>
           <h5>17:30-18:30</h5>
           <Button colorScheme='' variant='link'>
    Evening 
  </Button>
          </Badge>
          </Box>
        </Stack>
        <Stack direction="column">
        <Box className="pick_up_input">
       <Input  placeholder="   Pick up" width="260px"  height="38px"/>
       <Input placeholder="Date" width="90px" height="38px"/>
       <img src={'images/Stop.svg'}/>
       </Box>
       <Box className="drop_off_input">
<Input  placeholder="   Drop-off" width="350px"height="38px"/>
<img src='images/Map Pin Line.svg'/>
</Box>
  <Box className="from_input">
<Input  placeholder="  From " width="260px"/>
<Input placeholder="To" width="85px"  height="38px"/>
</Box>
</Stack>

<Stack direction="row">
        <Box className="car_desc">
          <h5> Car model</h5>
          <h3>Toyota Yaris-2012</h3>
        </Box>
        <Box className="car_img">
<img src="images/car.jpg"/>
        </Box>
        
</Stack>
<Stack>
 <Box className="down_section">
<h5> Licensed Plate</h5>
          <h3>H xxxx DA</h3>
          
 </Box>
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
            flex={1}
            fontSize={'sm'}
            
            bg={'blue.500'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
        
            display={ 'flex'}
justify-content={'center'} 
align-items={'center'} 
padding= {'12px 16px'}

width= {'294px'}
height= {'56px'}
border-radius={'80px'} 
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