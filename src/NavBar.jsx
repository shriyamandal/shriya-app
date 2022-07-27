import { Box, Text, Link, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import ContactsBar from './ContactsBar';
import { GoChevronRight } from "react-icons/go";



function NavBar(props) {
    return <Box p={6} bg="blue.100" > 
   

<Breadcrumb align="right"spacing='8px' fontWeight='medium' fontSize='lg' separator={<GoChevronRight />}>
    <BreadcrumbItem>
      <BreadcrumbLink href='#'>About</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#Projects'>Projects</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#ContactsBar'>Contact Me</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  </Box>
}

  export default NavBar;