import { Box, Center } from '@chakra-ui/react'
import Contacts from './Contacts';


function NavBar(props) {
    return <Box fontSize='md' textAlign = "left" id="ContactsBar" > 
    <br></br>
      <Center fontSize="2xl" fontWeight="bold"> Contact Me </Center>
      <Box fontSize='md' textAlign = "left" > Below are some ways you can contact me. The best way
      to do so is through Linkedin. Feel free to send me a connection request or an InMail! I am 
      always open to questions or internship opportunities, so feel free to contact me about those. </Box>
        <Center><Contacts></Contacts></Center>
         </Box>
}

  export default NavBar;