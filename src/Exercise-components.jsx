import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

function Exercises(props) {


  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Exercises
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Yoga ... icon ... time period ... calories burned
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
    </div>
  );
}

export default Exercises;