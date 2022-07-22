import {
  Badge,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Passengers() {
  return (
    <Center py={6}>
      <Stack
       maxW={'390px'}
        w={'full'}
        borderWidth="1px"
      
        borderRadius="lg"
        height="837px"
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
       
        <Flex flex={1} >
          <Image
          position="absolute"
          top="100px"
           width=" 48px"
height="48px"
            src={'images/girl.png'}/>
        </Flex>
        <Stack direction ="column"  height="100px" 
    position="absolute"
    top="100px"
    left="590px"
        >
          <Box className="Username">
            <h3>Erica</h3>
          </Box>
         <Box className="profil_desc">
            <h1>Kiosque Sangwe</h1>
            <img src='images/Line 2.svg'/>
            <h2>CBD Korose</h2>
         </Box>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
            display="flex"
            flex-direction="row"
              px={2}
              py={1}
              bg={useColorModeValue('white.50', 'white.800')}
              fontWeight={'400'}>
             <img src='images/Users.svg'/>
             <h5>1</h5>
            </Badge>
            <Badge
            display="flex"
            flex-direction="row"
            
            font-style="normal"
fontWeight="700"
fontSsize= "12px"
lineHeight="125%"  

              px={2}
              py={1}
              bg={useColorModeValue('white.50', 'white.800')}
              >
           <img src='images/Time_Circle.svg'/>
           <h5>2 mins</h5>
            </Badge>
               <Button
               
    
padding="0px 0px" 
width= "100px"
height= "35px"
borderRadius="100px"
              
                 bg={'blue.600'}
                 color={'white'}
              fontSize={'sm'}
            _hover={{
              bg: 'blue.400',
            }}
              _focus={{
                bg: 'blue.400',
              }}>
           Pick-up
            </Button>
           
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
           
            
          </Stack>
        </Stack>

        
      </Stack>
    </Center>
  );
}