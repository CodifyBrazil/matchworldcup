import { Box, Flex, Text } from "@chakra-ui/react";

import { useCountdown } from "../utils/Countdown";

export const CountDown = () => {
  let days;
  let hours = 0;
  let minutes;
  let seconds;

  const contDownTimer = (targetDate: any) => {
    [days, hours, minutes, seconds] = useCountdown(targetDate);
  };

  contDownTimer(new Date("Nov 20, 2022 13:00:00"));

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
            {days}
          </Text>
          <Text mt="-10px">Dias</Text>
        </Box>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"}>
            {hours}
          </Text>
          <Text mt="-10px">{hours > 1 ? "Horas" : "Hora"}</Text>
        </Box>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"}>
            {minutes}
          </Text>
          <Text mt="-10px">Minutos</Text>
        </Box>
        <Box textAlign={"center"}>
          <Text mr="20px" as="b" fontSize={"80px"} color="#ed1515">
            {seconds}
          </Text>
          <Text mt="-10px">Secundos</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
