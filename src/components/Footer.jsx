import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/1.jpeg"; 

const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.700"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            every type of currecy conversion available soon...
            with time our mission is to become biggest crypto trading platform
            in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={img1} />
          <h1>Sahil Monpara</h1>
          <Text>(founder/CEO)</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
