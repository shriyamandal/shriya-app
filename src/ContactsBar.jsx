import { Box, Center } from '@chakra-ui/react'
import Contacts from './Contacts';


function NavBar(props) {
    return <Box fontSize='md' textAlign = "left" id="ContactsBar" > 
    <br></br>
      <Center fontSize="2xl" fontWeight="bold"> Contact Me </Center>
        <Center><Contacts></Contacts></Center>
         </Box>
}

  export default NavBar;