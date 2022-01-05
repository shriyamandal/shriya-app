import { Box, Link } from '@chakra-ui/react'
import ContactsBar from './ContactsBar';


function NavBar(props) {
    return <Box id="About"> 
        <Link
              color="purple.500"
              fontWeight = "bold"
              href="#About"
              fontSize="lg"
            >
              About
            </Link>
            ‎ ⁕ ‎
            <Link
              color="purple.600"
              fontWeight = "bold"
              href="#Projects"
              fontSize="lg"
            >
              Projects
            </Link>
            ‎ ⁕ ‎
            <Link
              color="purple.500"
              fontWeight = "bold"
              href="#ContactsBar"
              fontSize="lg"
            >
              Contact
            </Link>


        <br></br>
         </Box>
}

  export default NavBar;