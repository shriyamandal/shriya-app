import { Box, Badge, Center, Button} from '@chakra-ui/react'
import Contacts from './Contacts';
import Badges from './Badges';
import DynamicShadowImage from './dynamic-shadow-image.tsx';
import { Image } from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/roboto/300.css'

import coverimagey from './coverimagey.jpg'; 
import zena from './zena.jpg'; 


function Features(props) {
    return <Box fontSize="2xl" borderWidth='0px' borderRadius='lg' borderColor="blue.100" boxSize = "550px" p={5}>
       <Box mt='1'
          fontWeight='bold'
          as='h5'
          lineHeight='tight'
          color="blue.500"
          isTruncated> 
       

          Shriya Mandal <br></br>
      </Box>
      <Box fontSize="lg"> CS+Geology '24 @ UNC-Chapel Hill </Box>
      <Box><Contacts></Contacts></Box>

      <Box fontSize="md"> </Box>

      <Box textAlign="center" fontSize="md">
        Hi there! 👋 <br></br>
        Thank you for visiting my website! <br></br>
        Here's a little about me: <br></br>
        </Box>
        <Box textAlign="left" fontSize="md">
        ‎ • I'm a research assistant in UNC's Computer Science department and I was a SWE intern @ CarMax this summer! <br></br>
        ‎ • HackNC 2021 organizer, Pearl Hacks 2022 organizer and Girls Who Code teaching assistant <br></br>
        ‎ • Passionate about the outdoors, travel, gardening and introducing other women to CS! <br></br>
        ‎ • Always looking for new opportunities, contact me if interested! :) <br></br>
   </Box>
   <br></br>
   <Badges></Badges>
<br></br>
   <Button colorScheme='blue' size="sm">View my resume! </Button>

  </Box>
  }
  
  export default Features;