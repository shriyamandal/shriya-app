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
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Features from './Features';
import Projects from './Projects';
import Footer from './Footer';
import ZenImage from './ZenImage';
import NavBar from './NavBar';
import ContactsBar from './ContactsBar';
import '@fontsource/aclonica/400.css'
import '@fontsource/open-sans/700.css'
import custTheme from './theme';
import { fairyDustCursor } from 'cursor-effects';

new fairyDustCursor({colors: ["#FFC0CB", "#00ff00", "#0000ff"]});


function App() {
  return (
    <ChakraProvider theme={custTheme}>
      <NavBar></NavBar>
     <SimpleGrid columns={2} spacing={10}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="20vh" p={3}>
        
          <VStack spacing={8}>
            <Features/>
          </VStack>
        </Grid>
      </Box>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="20vh" p={5}>
        
          <VStack spacing={10}>
            <ZenImage/>
          </VStack>
        </Grid>
      </Box>
      </SimpleGrid>
      <Projects/>
      <ContactsBar></ContactsBar>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
