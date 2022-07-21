import {
  
  Box,
  Center,
  
  Stack,
  Button,
 
  Badge,
  useColorModeValue,
  Input,
 
} from '@chakra-ui/react';
import '../App.css';

export default function Home() {
  return (
    <Center py={6}>
      
      <Box className="Card"
        maxW={'320px'}
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
       <Input  placeholder="   Pick up" width="220px"  height="38px"/>
       <Input placeholder="Date" width="90px" height="38px"/>
       <img src={'images/Stop.svg'}/>
       </Box>
       <Box className="drop_off_input">
<Input  placeholder=" Drop-off" width="290px"height="38px"/>
<img src='images/Map Pin Line.svg'/>
</Box>
  <Box className="from_input">
<Input  placeholder="  From " width="200px"/>
<Input placeholder="To" width="85px"  height="38px"/>
</Box>
</Stack>

<Stack direction="row">
        <Box className="car_desc">
          <h5> car model</h5>
          <h3>Toyota Yaris-2012</h3>
        </Box>
        <Box className="car_img">
<img src="images/car.jpg"/>
        </Box>
        
</Stack>
       

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}