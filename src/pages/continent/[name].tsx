import Head from "next/head";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import { Banner, Description } from "components/Continent";

export default function Continent() {
    return (
        <>
            <Head>
                <title>Europa | WorldTrip</title>
            </Head>
            <Box as="main">
                <Banner />
                <Box mt={{ base: "16px", lg: "60px" }}>
                    <Description />
                </Box>
            </Box>
        </>
    );
}