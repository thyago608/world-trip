import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Banner } from "components/Banner";
import { Categories } from "components/Categories";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | WorldTrip</title>
            </Head>
            <Box as="main">
                <Banner />
                <Categories />
            </Box>
        </>
    );
}
