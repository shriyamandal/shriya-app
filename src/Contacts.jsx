import { Button, ButtonGroup, Link } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

function Contacts(props) {
    return <Button colorScheme='transparent'>
        <Link
              color="black"
              href="https://www.linkedin.com/in/shriyamandal/"
              fontSize="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={AiOutlineLinkedin} w={7} h={7} /> 
            </Link>
            <br></br> xx

        <Link
              color="black"
              href="https://github.com/shriyamandal"
              fontSize="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FiGithub} w={6} h={6} /> 
            </Link>
            <br></br> xx
            <Link
              color="black"
              href="mailto:shriyamandal2002@gmail.com"
              fontSize="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={HiOutlineMail} w={7} h={7} /> 
            </Link>
        </Button>

        
  }
  
  export default Contacts;