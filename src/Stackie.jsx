import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

function Stackie(props) {
    return <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Experience
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        x
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Other
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        x
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  }
  
  export default Stackie;