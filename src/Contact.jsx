import { Button, ButtonGroup, Link } from '@chakra-ui/react'

function Contact(props) {
    return <Button colorScheme='transparent'>
        <Link
              color="black"
              href="https://www.linkedin.com/in/shriyamandal/"
              fontSize="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me on Linkedin!
            </Link>
        </Button>
  }
  
  export default Contact;