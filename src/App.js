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
import Projects from './Projects';
import Footer from './Footer';
import NavBar from './NavBar';
import ContactsBar from './ContactsBar';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="blue.100">‎</Box>
      <Flex bg="blue.100">
    <Box w='250px' h='10' bg='transparent' fontsize="3xl" fontWeight="bold" fontFamily="sans-serif"> ‎ ‎ Shriya Mandal </Box> 
    <Spacer />
    <Box w='300px' h='10' bg='transparent'> <NavBar> </NavBar></Box>
    <Spacer />
    <Box w='100px' h='10' bg='transparent'> <ColorModeSwitcher/></Box>
  </Flex>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        
          <VStack spacing={8}>
            <Features/>
            <Projects></Projects>
            <ContactsBar></ContactsBar>
            <Footer></Footer>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
