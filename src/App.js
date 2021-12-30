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
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Tester from './Tester';
import Features from './Features';
import Stackie from './Stackie';
import Contact from './Contact';
import coverimages from './coverimages.jpg'; 


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Features/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
