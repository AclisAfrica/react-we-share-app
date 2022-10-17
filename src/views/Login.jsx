import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  Input,
  useColorModeValue,
 IconButton,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import Header from'../Components/Header.jsx';
import{ Link } from'react-router-dom';
import '../App.css';



const Login = ()=> {

const[type ,setType]= useState('password');
const [icon,setIcon]= useState(eyeOff)
const handleToggle = () =>{
  if (type=== 'password'){
    setIcon(eye)
    setType('text')
  }
  else{
    setIcon(eyeOff)
    setType('password')
  }
}


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
<Header  title="Login" /> 
        <Box>
  < input  type="checkbox" className="toggle_1"/>
</Box>
        <Box className="body" px={6} py={10} mb="15px">
         <Box className="input">
              <h1>Username</h1>
               <Input  placeholder="example@example.com" />

                <h1>password</h1>
                
                
                 <input type={type} placeholder="Enter Password" />
                 <Box className="eye" >
                <span onClick={handleToggle}> 
                  <Icon icon={icon} size={15}/>
                </span>
                    
          </Box>
                   
               
                   

        </Box>
       <Link to='/'>
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
            }}
            width="342px" 
height="54px" 
textTransform="uppercase"
            >
           Login
          </Button>
       </Link>
          
        </Box>
        <Box className="reset_password">
          <a href='#'>Forgot you password?</a>
          <a href="#"> Need to change your password?</a>
          <a href="#">Help?</a>
        </Box>
      </Box>
    </Center>
 
  )
  }
  
 export default Login;