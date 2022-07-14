import React from 'react'
import styled from'styled-components'
import{ Box, Stack ,Input,Button} from '@chakra-ui/react'

const Login=()=>{
    return(
        <Container>
            <Stack direction="column" spacing="50px">
 <Box className="Logo">
      <img src={'images/Logo.png'}/>
     </Box>

     <Box className="Body">
<p>Log In</p>
<Input placeholder="Username"/>

<Input placeholder="Password"/>
<p>Forgot your password,Need to change your password ? Help?</p>
     <Button bg='Blue' color="white" >Log In</Button>

     </Box>
            </Stack>
   
        </Container>
    )
}

const Container= styled.div`


`
export default Login;