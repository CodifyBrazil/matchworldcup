import { Box, Flex, Text, Image, Input, Tooltip } from "@chakra-ui/react";
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
      {matchs.map((item, index) => {
        return (
          <Box
            key={index}
            boxShadow="xl"
            w="49%"
            h="100px"
            borderRadius={"4px"}
            border="1px solid #ccc"
            cursor={"pointer"}
            _hover={{
              boxShadow: "2xl",
              border: "1px solid #4128ff",
            }}
            mt="10px"
            bg={"#fff"}
          >
            <Flex flexDir={"column"} p="10px">
              <Text as="b" fontSize={"13px"}>
                {item.diaSemana.toLocaleLowerCase()}{" "}
                {item.data.replaceAll("/2022", "")}
                {" • "}
                {item.hora}
              </Text>
              <Flex
                justifyContent={"space-around"}
                alignItems="center"
                mt="5px"
                marginBottom={"10px"}
              >
                <Flex>
                  <Tooltip label={item.mandante.replaceAll(".svg", "")}>
                    <Image
                      w={"40px"}
                      h="40px"
                      objectFit="cover"
                      borderRadius={"full"}
                      src={`bandeiras/${item.mandante}`}
                    />
                  </Tooltip>
                  <Input
                    w="30px"
                    ml="10px"
                    bg="#fafafa"
                    type={"number"}
                    placeholder="0"
                  />
                </Flex>
                <Flex>
                  <Text>X</Text>
                </Flex>
                <Flex>
                  <Input w="30px" mr="10px" bg="#fafafa" />
                  <Tooltip label={item.visitante.replaceAll(".svg", "")}>
                    <Image
                      w={"40px"}
                      h="40px"
                      objectFit="cover"
                      borderRadius={"full"}
                      src={`bandeiras/${item.visitante}`}
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};
