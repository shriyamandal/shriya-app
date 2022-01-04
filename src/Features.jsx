import { Box, Badge, Center } from '@chakra-ui/react'
import Contacts from './Contacts';
import coverimagey from './coverimagey.jpeg'; 

function Features(props) {
    return <Box fontSize="2xl" borderWidth='5px' borderRadius='lg' borderColor="purple.200" boxSize = "600px">
   <Box> ‎ </Box>
    <Center><br></br><img src={coverimagey} alt="Cover" /></Center>
    <Box mt='1'
          fontWeight='semibold'
          as='h5'
          lineHeight='tight'
          isTruncated> 
          Shriya Mandal <br></br>
      </Box>
      <Box fontSize="lg"> CS+Geology Student @ UNC-Chapel Hill </Box>
      <Box><Contacts></Contacts></Box>

      <Box textAlign="center" fontSize="md">
        Hi there! 👋 <br></br>
        Here's a little about me: <br></br>
        </Box>
        <Box textAlign="left" fontSize="md">
         • Research assistant at UNC's Computer Science Department <br></br>
        ‎ • HackNC 2021 organizer and Pearl Hacks 2022 organizer <br></br>
        ‎ • Aspiring software engineer and open to internships! <br></br>
        ‎ • Incoming tech intern @ Carmax for summer of 2022 <br></br>
        ‎ • Interested in travel, the outdoors and language learning! <br></br>
      </Box>
      <Box fontSize="sm">
        <Badge borderRadius='full' px='2' colorScheme='blue'>
            Python
          </Badge> 
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Java
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='pink'>
            JavaScript
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='yellow'>
            HTML
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='green'>
            CSS
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='blue'>
            Tkinter
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Java Swing
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='pink'>
            React
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='yellow'>
            Chakra UI
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='green'>
            Git
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='blue'>
            GitHub
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Netlify
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='pink'>
            VSCode
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='yellow'>
            Eclipse
          </Badge> ‎
          <Badge borderRadius='full' px='2' colorScheme='green'>
            IntelliJ
          </Badge>
      </Box> 
  </Box>
  }
  
  export default Features;