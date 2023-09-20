import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Header from "../components/Header";

const AboutUsPage = () => {
  return (
    <Box>
      <Box className="text-center">
        <Header />
      </Box>
      <Flex className="d-flex justify-content-center align-items-center">
        <Accordion
          defaultIndex={[]}
          allowMultiple
          w="60%"
          marginTop="40px"
          borderColor="gray.400"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="h4" flex="1" textAlign="left">
                  Que es My Task List?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              My Tasks List es una aplicación basada en React Js, muy funcinal y
              útil en la empresa.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="h4" flex="1" textAlign="left">
                  Cuáles son los posibles usos?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Es una excelente aplicación web para organizar y mantener al dia
              las actividades que en el dia a dia deben realizar sus empleados,
              lo anterior redunda en un aumento de la productividad y la
              eficiencia en el trabajo, dado que ahora podran estar seguros de
              tener chequeadas todas las tareas diarias. Las funcionalidades mas
              importantes de la aplicación My Task List: #1. La capacidad de
              crear el número de tareas necesario para el desempeño de las
              funciones del empleado. #2. La monitorización continua de las
              tareas que están pendientes por realizar.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="h4" flex="1" textAlign="left">
                  My Tasks List utiliza las siguientes tecnologías
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>React JS</li>
                <li>Chakra UI</li>
                <li>Bootstrap</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );
};

export default AboutUsPage;
