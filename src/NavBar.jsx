import { Box, Link } from '@chakra-ui/react'
import ContactsBar from './ContactsBar';


function NavBar(props) {
    return <Box id="About"> 
        <Link
              // color="blue.500"
              fontWeight = "bold"
              href="#About"
              fontSize="md"
            >
              About
            </Link>
            ‎ ⁕ ‎
            <Link
              // color="blue.600"
              fontWeight = "bold"
              href="#Projects"
              fontSize="md"
            >
              Projects
            </Link>
            ‎ ⁕ ‎
            <Link
              // color="blue.500"
              fontWeight = "bold"
              href="#ContactsBar"
              fontSize="md"
            >
              Contact
            </Link>


        <br></br>
         </Box>
}

  export default NavBar;