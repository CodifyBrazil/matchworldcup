import { Box, Button, Flex, Image, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { API } from "../service/API";
import { API_type } from "../types/API";

export const ListSelecions = () => {
  const [flag, setFlag] = useState<API_type[]>([]);

  const getFlags = async () => {
    const { data } = await API.getAllMatchs();
    setFlag(data);
  };
  getFlags();

  return (
    <Flex
      overflow={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          width: "0px",
          height: "6px",
          borderRadius: "8px",
          backgroundColor: `#ccc`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `#4128ff`,
          borderRadius: "8px",
        },
      }}
      bg={"#fff"}
      w="70%"
      h="70px"
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent="center"
      border="2px solid #4128ff"
      borderRadius={"4px"}
      mt="10px"
      p="5px"
    >
      <Flex justifyContent={"space-between"}>
        {flag.map((item, index) => (
          <Tooltip key={index} label={item.mandante.replaceAll(".svg", "")}>
            <Box
              cursor={"pointer"}
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
      </Flex>
    </Flex>
  );
};

// MdKeyboardArrowLeft
// MdKeyboardArrowLeft
