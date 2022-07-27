import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Banner } from "components/Banner";
import { Categorie } from "components/Categorie";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Box as="main">
        <Banner />
        <Categorie icon="/images/cocktail.svg" title="vida moderna" />
      </Box>
    </>
  );
}
