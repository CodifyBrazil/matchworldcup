import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CountDown } from "./components/CountDown";

const App = () => {
  return (
    <Flex bg="#fafafa" w="100%" h="100vh" justifyContent={"center"}>
      <Flex w="70%" justifyContent={"center"}>
        <CountDown />
      </Flex>
    </Flex>
  );
};

export default App;
