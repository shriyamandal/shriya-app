import { Box, Badge } from '@chakra-ui/react'
import Contact from './Contact';


function Features(props) {
    return <Box fontSize="2xl" borderWidth='1px' borderRadius='lg' borderColor="purple.200" boxSize = "600px">
    <Box mt='1'
          fontWeight='semibold'
          as='h5'
          lineHeight='tight'
          isTruncated> Shriya Mandal <br></br>
      </Box>
      <Box fontSize="lg"> CS and Geology Student at UNC-Chapel Hill 2024 </Box>
      <Box fontSize="md">
        Hi there! 👋
        <br></br>
       I'm a research assistant at UNC's CS department and a teaching assistant for UNC Girls Who Code.
       I was also an organizer for HackNC 2021, and an organizer for Pearl Hacks 2022!
       <br></br>
       Incoming technology intern at CarMax for the summer of 2022. I'm open to internship 
       opportunities!
      </Box>
      <Box fontSize="sm">
        <Badge borderRadius='full' px='2' colorScheme='blue'>
            Python
          </Badge> ‎
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
      <Box> <br></br> <Contact></Contact></Box>
  </Box>
  }
  
  export default Features;