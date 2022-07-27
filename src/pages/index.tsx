import Head from "next/head";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Box as="main">
        <Flex
          as="section"
          px="4"
          py="7"
          backgroundImage="url('/images/background-desktop.svg')"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        >
          <Flex justify="space-between">
            <VStack align="flex-start" gap="2">
              <Text fontSize="xl" fontWeight="500" color="white.50">
                5 Continentes,
                <br />
                infinitas possibilidades.
              </Text>
              <Text color="gray.50" fontSize="sm">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
