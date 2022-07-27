import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex height={50} justify="center" align="center">
      <Image
        width="80px"
        height="20px"
        src="/images/logo.svg"
        alt="world trip"
      />
    </Flex>
  );
}
