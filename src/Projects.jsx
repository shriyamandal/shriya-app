import {
    Center,
    Box,
    List,
    UnorderedList,
    ListItem,
    Link,
    Icon,
  } from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'


function Projects(props) {
    return <Box id="Projects">
      <br></br>
      <Center fontSize="2xl" fontWeight="bold"> Projects </Center>
    <Box fontSize='md' textAlign = "left" > I've completed a variety of different projects,
    which you can view below.</Box>
    <br></br>
    <Center>
    <Box bg='purple.100' w='80%' p={4} color='black'>
  <Box fontSize="lg" fontWeight="bold"> CovidCarolina </Box>
  <Box textAlign="left" fontSize="md" fontStyle="italic"> A retro styled application with an interactive GUI to help students at UNC 
  manage online courses. </Box>
  <Box textAlign="left" fontSize="md"> </Box>
  <UnorderedList textAlign="left" fontSize="md">
    <ListItem> Utilized Python, Tkinter, Git and VSCode </ListItem>
    <ListItem> Worked on a team to create an app that allowed students to pair their courses with their Zoom links, 
      played calming music, linked to mental health and university resources and calculated courses grades. </ListItem>
    <ListItem> <Link
              color="purple.600"
              href="https://github.com/erinb131/PearlHacks-21"
              fontSize="md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FiGithub} w={6} h={6} /> 
              Access the GitHub repository. 
            </Link>  </ListItem>
  </UnorderedList>
</Box>


<Box bg='purple.200' w='80%' p={4} color='black'>
  <Box fontSize="lg" fontWeight="bold"> Monty Python Bridge Scene Animation </Box>
  <Box textAlign="left" fontSize="md" fontStyle="italic"> A minute long, interactive animation
   of the bridge scene from Monty Python, complete with knights going overboard. </Box>
  <Box textAlign="left" fontSize="md"> </Box>
  <UnorderedList textAlign="left" fontSize="md">
    <ListItem> Utilized Java, Java Swing, ObjectEditor and Eclipse IDE </ListItem>
    <ListItem> Implemented using the model view controller and observer design patterns. </ListItem>
    <ListItem> Worked on the project over a course of 4 weeks, and used fundamental concepts such
      as interfaces and classes, inheritance, polymorphism and encapsulation in order to complete.
    </ListItem>
  </UnorderedList>
</Box>


<Box bg='purple.100' w='80%' p={4} color='black'>
  <Box fontSize="lg" fontWeight="bold"> My Personal Website </Box>
  <Box textAlign="left" fontSize="md" fontStyle="italic"> My personal website (which you're on now!) that 
  has been customized for my own needs. </Box>
  <Box textAlign="left" fontSize="md"> </Box>
  <UnorderedList textAlign="left" fontSize="md">
    <ListItem> Utilized JavaScript, HTML, React, Chakra UI, Netlify and VSCode </ListItem>
    <ListItem> Created in order to showcase my work as well as introduce myself! </ListItem>
    <ListItem> <Link
              color="purple.600"
              href="https://github.com/shriyamandal/shriya-personal-site"
              fontSize="md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FiGithub} w={6} h={6} /> 
              Access the GitHub repository. 
            </Link>  </ListItem>
  </UnorderedList>
</Box>
</Center>

    </Box>
  }
  
  export default Projects;