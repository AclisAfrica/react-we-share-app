import {
  Box,
  Center,
  Stack,
  Button,
 Wrap,
 WrapItem,
Image,
  useColorModeValue,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons'
import '../App.css';

export default function Test() {
    return(
<Center>
    <Stack align={'center'} justify-content={'space-between'} direction={'row'} mt={6} gap="190px"  >

            <Menu>
  <MenuButton
display="none"
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
position="relative"
top="-15px"
left="-15px"
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
          
          
        </Stack>
        </Center>
       );
       }