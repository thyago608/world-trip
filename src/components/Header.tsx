import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { Flex, Image, Link as ChakraLink, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  const { asPath } = useRouter();

  const routeContinent = asPath.startsWith("/continent");

  const containerSize = routeContinent ? {
    base: "65%",
    md: "60%"
  } : "100%";

  const containerJustify = routeContinent ? "space-between" : "center";

  return (
    <motion.header
      style={{ marginTop: '0.5rem' }}
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        w="100%"
        h={50}
        maxW={1200}
        m="0 auto"
        px={4}
      >
        <Flex w={containerSize} justify={containerJustify} align="center">
          {routeContinent &&
            <Link href="/" passHref>
              <ChakraLink
                minWidth="min-content"
                h="min-content"
              >
                <ChevronLeftIcon w={{ base: "1rem", md: "2rem" }} h={{ base: "1rem", md: "2rem" }} />
              </ChakraLink>
            </Link>
          }
          <Image
            width={{ base: "80px", md: "100px", lg: "125px" }}
            height={{ base: "20px", md: "30px", lg: "45px" }}
            src="/images/logo.svg"
            alt="World Trip"
            title="World Trip"
          />
        </Flex>
      </Flex>
    </motion.header>
  );
}
