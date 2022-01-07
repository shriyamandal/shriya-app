import { Box, Badge, Center, Button} from '@chakra-ui/react'
import Contacts from './Contacts';
import Badges from './Badges';

import coverimagey from './coverimagey.jpg'; 

function Features(props) {
    return <Box fontSize="2xl" borderWidth='2px' borderRadius='lg' borderColor="blue.100" boxSize = "550px">
       <Center><br></br><img src={coverimagey} alt="Cover" /></Center>

    <Box mt='1'
          fontWeight='semibold'
          as='h5'
          lineHeight='tight'
          // color="blue.500"
          isTruncated> 
          Shriya Mandal <br></br>
      </Box>
      <Box fontSize="lg"> CS+Geology '24 @ UNC-Chapel Hill </Box>
      <Box><Contacts></Contacts></Box>

      <Box textAlign="center" fontSize="md">
        Hi there! 👋 <br></br>
        Here's a little about me: <br></br>
        </Box>
        <Box textAlign="left" fontSize="md">
        ‎ • Research assistant at UNC's Computer Science Department <br></br>
        ‎ • HackNC 2021 organizer and Pearl Hacks 2022 organizer <br></br>
        ‎ • Incoming tech intern @ CarMax for summer 2022 <br></br>
        ‎ • Hoping to work in a software engineering position after graduation <br></br>
        ‎ • Interested in travel, the outdoors and language learning! <br></br>
   </Box>
   <Button colorScheme='blue' size="sm">Download my resume </Button>

  </Box>
  }
  
  export default Features;