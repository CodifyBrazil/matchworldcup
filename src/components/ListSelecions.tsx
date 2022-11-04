import { Box, Flex, Image } from "@chakra-ui/react";

export const ListSelecions = () => {
  return (
    <Flex
      bg={"#fff"}
      w="70%"
      h="50px"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent="center"
      border="2px solid #4128ff"
      borderRadius={"4px"}
      mt="10px"
    >
      <Flex>
        <Box bg="#ccc" w="40px" h="40px" borderRadius={"full"} border="none">
          <Image
            src="/alemanha.svg"
            w="100%"
            h="40px"
            borderRadius={"full"}
            objectFit="cover"
            border="none"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
