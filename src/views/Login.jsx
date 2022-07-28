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
            <img src='images/Logo.png'/>
          <Text className="login">
          Login
          </Text>
       
        </Stack>

        <Box className="body" px={6} py={10} mb="15px">
         <Box className="input">

               <Input  placeholder="Username" />

                 <Input  placeholder="Password" />
                 <Box className="eye">
                    <ViewIcon />
                    <p>show</p>
                 </Box>
                   

        </Box>
       
          <Button
            mt={10}
            w={'full'}
            bg={'blue.600'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'blue.400',
            }}
            _focus={{
              bg: 'blue.400',
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