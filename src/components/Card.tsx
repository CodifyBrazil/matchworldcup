import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { API } from "../service/API";
import { API_type } from "../types/API";

export const Card = () => {
  const [matchs, setMatchs] = useState<API_type[]>([]);

  const getMatchs = async () => {
    const { data } = await API.getAllMatchs();
    setMatchs(data);
  };

  getMatchs();
  return (
    <Flex
      w="70%"
      flexDirection={"row"}
      flexWrap="wrap"
      justifyContent="space-between"
      borderRadius={"4px"}
      mb="50px"
    >
      {matchs.map((item, index) => (
        <Box
          key={index}
          w="49%"
          h="80px"
          border="2px solid #4128ff"
          borderRadius={"4px"}
          mt="10px"
          bg={"#fff"}
        ></Box>
      ))}
    </Flex>
  );
};
