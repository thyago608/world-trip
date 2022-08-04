import Head from "next/head";
import { Box, Heading, Divider } from "@chakra-ui/react";
import { Banner, Categories, ContinentsSlider } from "components/Home";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | WorldTrip</title>
            </Head>
            <Box as="main">
                <Banner />
                <Categories />
                <Divider
                    w="60px"
                    opacity="0.8"
                    borderColor="gray.500"
                    m="1rem auto"
                />
                <Box as="section">
                    <Box as="header" mb={5}>
                        <Heading
                            fontSize="xl"
                            fontWeight="medium"
                            color="gray.500"
                            textAlign="center"
                        >
                            Vamos nessa?<br />Então escolha seu continente
                        </Heading>
                    </Box>
                    <ContinentsSlider />
                </Box>
            </Box>
        </>
    );
}
