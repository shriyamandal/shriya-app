import { Box, Link } from '@chakra-ui/react'
import ContactsBar from './ContactsBar';


function NavBar(props) {
    return <Box id="About"> 
        <Link
              color="purple.500"
              href="#About"
              fontSize="lg"
            >
              About
            </Link>
            ‎ ⁕ ‎
            <Link
              color="purple.600"
              href="#Projects"
              fontSize="lg"
            >
              Projects
            </Link>
            ‎ ⁕ ‎
            <Link
              color="purple.500"
              href="#ContactsBar"
              fontSize="lg"
            >
              Contact
            </Link>


        <br></br>
         </Box>
}

  export default NavBar;