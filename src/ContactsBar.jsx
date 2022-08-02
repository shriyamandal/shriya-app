import { Box, Center } from '@chakra-ui/react'
import Contacts from './Contacts';


function NavBar(props) {
    return <Box fontSize='md' textAlign = "left" id="ContactsBar" p={5} > 
    <br></br>
      <Center fontSize="2xl" fontWeight="bold" color="blue.500"> Contact Me </Center>
      <Box fontSize='md' textAlign = "left" fontWeight="medium"> Below are some ways you can contact me. The best way
      to do so is through Linkedin. Feel free to send me a connection request or an InMail! I am 
      always open to questions or internship opportunities, so feel free to contact me about those.
      <br></br>
      I am primarily looking for internship opportunities in the field of software engineering. I am open to opportunities
      both during the summer and during the semester. 
      <br></br>
      I am currently searching for a Summer 2023 internship. </Box>
        <Center><Contacts></Contacts></Center>
         </Box>
}

  export default NavBar;