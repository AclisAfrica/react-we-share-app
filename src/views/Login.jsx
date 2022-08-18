import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  Input,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { CheckIcon,ViewIcon } from '@chakra-ui/icons';
import '../App.css';

export default function Login() {
  return (
    <Center py={6}>
      <Box className="Card"
        maxW={'390px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        >

        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Text className="login"  color="#36AE7C">
          Login
          </Text>

        </Stack>
        <Stack direction="row">
          <Box className="Email">
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
           Email
          </Button>
          </Box>
<Box className="Phone">
<Button colorScheme='' variant='link' 
  _hover={{
              color: '#36AE7C',
            }}>
    Phone Number
  </Button>
</Box>
        </Stack>

        <Box className="body" px={6} py={10} mb="15px">
         <Box className="input">

               <Input  placeholder="Username" />

                 <Input  placeholder="Password" />
                 <Box className="eye">
                    <ViewIcon />
                   
                 </Box>
                   

        </Box>
       
          <Button
            mt={10}
            w={'full'}
            bg={'#36AE7C'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.400',
            }}
            _focus={{
              bg: 'green.400',
            }}>
           Login
          </Button>
        </Box>
        <Box className="reset_password">
          <a href='#'>Forgot you password?</a>
          <a href="#"> Need to change your password?</a>
          <a href="#">Help?</a>
        </Box>
      </Box>
    </Center>
  );
}