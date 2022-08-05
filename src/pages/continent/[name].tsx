import Head from "next/head";
import { Flex, Box, Text, VStack, Grid } from "@chakra-ui/react";
import { Banner, Description } from "components/Continent";
import { City } from "components/Continent/City";

export default function Continent() {
    return (
        <>
            <Head>
                <title>Europa | WorldTrip</title>
            </Head>
            <Box as="main">
                <Banner />
                <Box as="section" mt={{ base: "16px", lg: "60px" }}>
                    <Description />
                </Box>
                <VStack
                    maxW={{ base: "945px", xl: "1000px" }}
                    margin="0 auto"
                    mt={{ base: "32px", lg: "70px" }}
                    mb={10}
                    as="section"
                    gap={5}
                >
                    <Text
                        fontSize="xl"
                        fontWeight="medium"
                        width="100%"
                        px={{ base: 4, lg: 0 }}
                    >
                        Cidades +100
                    </Text>
                    <Grid
                        gridTemplateColumns={{ md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
                        gap={{ base: '20px', lg: "45px" }}
                        px={{ md: 4, lg: 0 }}
                    >
                        <City city={{
                            image: "/images/foto.svg",
                            city: "Londres",
                            country: "Reino Unido",
                            countryFlag: "/images/reino-unido.svg"
                        }} />
                        <City city={{
                            image: "/images/foto.svg",
                            city: "Londres",
                            country: "Reino Unido",
                            countryFlag: "/images/reino-unido.svg"
                        }} />
                        <City city={{
                            image: "/images/foto.svg",
                            city: "Londres",
                            country: "Reino Unido",
                            countryFlag: "/images/reino-unido.svg"
                        }} />
                        <City city={{
                            image: "/images/foto.svg",
                            city: "Londres",
                            country: "Reino Unido",
                            countryFlag: "/images/reino-unido.svg"
                        }} />
                        <City city={{
                            image: "/images/foto.svg",
                            city: "Londres",
                            country: "Reino Unido",
                            countryFlag: "/images/reino-unido.svg"
                        }} />
                        <City city={{
                            image: "/images/foto.svg",
                            city: "Londres",
                            country: "Reino Unido",
                            countryFlag: "/images/reino-unido.svg"
                        }} />
                    </Grid>
                </VStack>
            </Box>
        </>
    );
}