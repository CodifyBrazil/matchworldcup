import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { CountDown } from "./components/CountDown";
import { ListSelecions } from "./components/ListSelecions";

const App = () => {
  return (
    <Flex bg="#fafafa" w="100%" h="100%" justifyContent={"center"}>
      <Flex w="70%" flexDirection="column" alignItems={"center"}>
        <CountDown />
        <ListSelecions />
        <Card />
      </Flex>
    </Flex>
  );
};

export default App;
