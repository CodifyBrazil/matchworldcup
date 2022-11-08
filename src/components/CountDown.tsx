import { Box, Flex, Text } from "@chakra-ui/react";

import { useCountdown } from "../utils/Countdown";

export const CountDown = () => {
  let days;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

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
      <Flex textAlign={"center"}>
        <Box textAlign={"center"} w="120px">
          <Text mr="20px" as="b" fontSize={"80px"} m="auto">
            {days}
          </Text>
          <Text mt="-10px">Dias</Text>
        </Box>
        <Box textAlign={"center"} w="120px">
          <Text mr="20px" as="b" fontSize={"80px"} m="auto">
            {hours >= 10 ? hours : "0" + hours}
          </Text>
          <Text mt="-10px">{hours > 1 ? "Horas" : "Hora"}</Text>
        </Box>
        <Box textAlign={"center"} w="120px">
          <Text mr="20px" as="b" fontSize={"80px"} m="auto">
            {minutes >= 10 ? minutes : "0" + minutes}
          </Text>
          <Text mt="-10px">Minutos</Text>
        </Box>
        <Box textAlign={"center"} w="120px">
          <Text mr="20px" as="b" fontSize={"80px"} color="#ed1515" m="auto">
            {seconds >= 10 ? seconds : "0" + seconds}
          </Text>
          <Text mt="-10px">Secundos</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
