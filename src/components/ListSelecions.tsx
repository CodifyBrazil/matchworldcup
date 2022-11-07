import { Box, Button, Flex, Image } from "@chakra-ui/react";

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
        <Button w="40px" h="40px" borderRadius={"full"}>
          <Image
            src="/alemanha.svg"
            borderRadius={"full"}
            objectFit="cover"
            border="none"
          />
        </Button>
      </Flex>
    </Flex>
  );
};
