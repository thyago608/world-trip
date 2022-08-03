import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex height={50} justify="center" align="center" mb={2}>
      <Image
        width={{ base: "80px", md: "100px", lg: "125px" }}
        height={{ base: "20px", md: "30px", lg: "45px" }}
        src="/images/logo.svg"
        alt="world trip"
      />
    </Flex>
  );
}
