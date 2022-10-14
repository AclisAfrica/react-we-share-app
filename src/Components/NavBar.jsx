import {
 Box,
 Stack,
Image,
Center,
Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons'
import '../App.css';
import {Link} from 'react-router-dom'

export default function Home() {

  return (
  <Center>
    <Stack align={'center'} justify-content={'space-between'} direction={'row'} mt={6} gap="190px"  >

            <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
position="relative"
left="-15px"

    variant='outline'
  />
  <MenuList
  background={'#36AE7C'}
  >
     <Link to='/'>
    <MenuItem >
      Home
    </MenuItem>
    </Link>
    <Link to='/Login'>
    <MenuItem >
      Login
    </MenuItem>
    </Link>
    <Link to='/Passengers'>
    <MenuItem >
      Passengers
    </MenuItem></Link>
    <Link to='/Pickups'>
    <MenuItem >
     Pickups
    </MenuItem></Link>
    <Link to='/DropOff'>
    <MenuItem >
     DropOff
    </MenuItem>
    </Link>
    
  </MenuList>
</Menu>
            <Box className="user_profil " >
         <Image width={'56px'}  height={'56px'}src={'images/girl.png'}/>
          </Box>
        
          
        </Stack>
        </Center>
       );
       }