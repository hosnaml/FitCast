import { Container } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

  import Exercises from './Exercise-components';

  function Weather(props) {

  return (
    <div>
      <Container>
        time period: 12-16, tempreture: 20, wind speed: 5, Exercises: 
    <Exercises />
 
    </Container>
    </div>
  );
}

export default Weather;