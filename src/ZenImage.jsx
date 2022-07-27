import { Box, Badge, Center, Button} from '@chakra-ui/react'
import Contacts from './Contacts';
import Badges from './Badges';
import DynamicShadowImage from './dynamic-shadow-image.tsx';
import { Image } from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/roboto/300.css'

import coverimagey from './coverimagey.jpg'; 
import zena from './zena.jpg'; 


function ZenImage(props) {
    return <Box fontSize="2xl" borderWidth='0px' borderRadius='lg' borderColor="blue.100" boxSize = "550px" p={5}>
       <Box mt='1'
          fontWeight='semibold'
          as='h5'
          lineHeight='tight'
          // color="blue.500"
          isTruncated> 
       
          <Center><br></br><DynamicShadowImage src={zena} /></Center>
          <br></br>

          <Box fontSize="sm"> Me at the Great Smoky Mountains National Park! </Box>


   </Box>


    

      
  </Box>
  }
  
  export default ZenImage;