import { Box } from '@chakra-ui/react'
import Contacts from './Contacts';


function NavBar(props) {
    return <Box fontSize='md' id="ContactsBar" > 
        Feel free to contact me at the following! <br></br>
        Linkedin is my preferred method of contact -- send me a connection request or 
        shoot me an inmail if you'd like to know more or connect :)
        <br></br>
        <Contacts></Contacts>
         </Box>
}

  export default NavBar;