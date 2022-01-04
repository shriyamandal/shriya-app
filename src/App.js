import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Stack,
  Flex,
  Center,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Features from './Features';
import Stackie from './Stackie';
import Contacts from './Contacts';
import NavBar from './NavBar';
import ContactsBar from './ContactsBar';


import coverimagey from './coverimagey.jpeg'; 


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>‎</Box>
      <Flex>
    <Box w='140px' h='10' bg='transparent' fontsize="2xl"> ‎ ‎ Shriya Mandal </Box> 
    <Spacer />
    <Box w='300px' h='10' bg='transparent'> <NavBar> </NavBar></Box>
    <Spacer />
    <Box w='100px' h='10' bg='transparent'> <ColorModeSwitcher/></Box>
  </Flex>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        
          <VStack spacing={8}>
            <Features/>
            <Stackie></Stackie>
            <ContactsBar></ContactsBar>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
