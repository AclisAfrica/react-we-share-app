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
import { HamburgerIcon, } from '@chakra-ui/icons'
import '../App.css';

export default function Home() {

  return (
  <Center>
    <Stack align={'center'} justify-content={'space-between'} direction={'row'} mt={6} gap="190px"  >

            <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}

    variant='outline'
  />
  <MenuList>
    <MenuItem command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem  command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
            <Box className="user_profil " >
         <Image width={'56px'}  height={'56px'}src={'images/girl.png'}/>
          </Box>
        
          
        </Stack>
        </Center>
       );
       }