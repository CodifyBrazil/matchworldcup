import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const CountDown = () => {
  const dateOpening = new Date("Dec 20, 2022 13:00:00");
  const [date, setDate] = useState(0);

  const Calcule_CountDown = () => {
    const openingDay = new Date(new Date());
  };

  // console.log(dateOpening);
  return (
    <Flex
      bg={"#fff"}
      w="70%"
      h="150px"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent="center"
      border="2px solid #4128ff"
      borderRadius={"4px"}
      mt="40px"
    >
      <Flex justifyContent={"center"}>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"}>
            12
          </Text>
          <Text mt="-10px">Dias</Text>
        </Box>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"}>
            14
          </Text>
          <Text mt="-10px">Horas</Text>
        </Box>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"}>
            29
          </Text>
          <Text mt="-10px">Minutos</Text>
        </Box>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"} color="#ed1515">
            06
          </Text>
          <Text mt="-10px">Secundos</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
