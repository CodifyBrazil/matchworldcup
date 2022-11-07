import { Box, Button, Flex, Image, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { API } from "../service/API";
import { API_type } from "../types/API";

export const ListSelecions = () => {
  useEffect(() => {
    getFlags();
  }, []);

  const [flag, setFlag] = useState<API_type[]>([]);

  const getFlags = async () => {
    const { data } = await API.getAllMatchs();
    setFlag(data);
  };

  return (
    <Flex
      overflow={"hidden"}
      bg={"#fff"}
      w="70%"
      h="50px"
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent="center"
      border="2px solid #4128ff"
      borderRadius={"4px"}
      mt="10px"
    >
      <Flex justifyContent={"space-between"}>
        <Box pos={"absolute"} zIndex={"999"}>
          <Button>
            <MdKeyboardArrowLeft />
          </Button>
        </Box>
        {flag.map((item, index) => (
          <Tooltip label={item.mandante.replaceAll(".svg", "")}>
            <Box
              key={index}
              w="40px"
              h="40px"
              borderRadius={"full"}
              border="
        2px solid #00ed76"
              ml={"10px"}
            >
              <Image
                src={`bandeiras/${item.mandante}`}
                borderRadius={"full"}
                objectFit="cover"
                border="none"
                h="100%"
              />
            </Box>
          </Tooltip>
        ))}
        <Box>
          <Button>
            <MdKeyboardArrowRight />
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

// MdKeyboardArrowLeft
// MdKeyboardArrowLeft
