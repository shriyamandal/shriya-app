import { Box, Text, Link, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import ContactsBar from './ContactsBar';
import { Stack, HStack, VStack, Heading} from '@chakra-ui/react'
import { GoChevronRight } from "react-icons/go";
import { Divider } from '@chakra-ui/react'



function NavBar(props) {
    return  <HStack spacing={8}>
    <Box p={6} bg="transparent" width="100%"  > 
    
    <Box align="left" display="inline-block" fontWeight='bold' fontSize='2xl' color="blue.300" ><Heading>Shriya Mandal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Heading></Box>

<Breadcrumb  display="inline-block" align="right" spacing='8px' fontWeight='medium' fontSize='lg' separator={<GoChevronRight />}>
    <BreadcrumbItem>
      <BreadcrumbLink href='#'> About</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#Projects'>Projects</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#ContactsBar'>Contact Me</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  </Box>
  </HStack>
}

  export default NavBar;