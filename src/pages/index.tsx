import Head from "next/head";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import NProgress from 'nprogress'
import { Box, Heading, Divider, Text } from "@chakra-ui/react";
import { Banner, Categories, ContinentsSlider } from "components/Home";
import { Continent } from "types/continent";
import { motion } from "framer-motion";
import { api } from "services/api";
import { continentImages } from "lib/continentImages";
import { Back4AppContinentsList } from "types/back4app";
import { useRouter } from "next/router";
import { pexels } from "services/pexels";
import { AirplaneAnimation } from "components/Airplane";

interface HomeProps {
    continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: string) => {
            NProgress.start();
            setLoading(!!url);
        };
        const handleStop = () => {
            setLoading(false);
            NProgress.done();
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop)
        }
    }, [router.events]);

    return (
        <>
            <Head>
                <title>Home | WorldTrip</title>
            </Head>
            <motion.main
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    animate={{ opacity: loading ? 0.5 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'relative'
                    }}
                >
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
                        <ContinentsSlider continents={continents} />
                    </Box>
                    {loading && <AirplaneAnimation />}
                </motion.div>
            </motion.main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const page = Math.floor(Math.random() * 10 + 1);
    const responseBack4App = await api.get<Back4AppContinentsList>('classes/Continentscountriescities_Continent?limit=10&order=name');
    const responsePexels = await pexels.photos.search({ query: "city", page, per_page: 7 });
    const photos: string[] = [];

    if ("photos" in responsePexels) {
        const photosLength = responsePexels.photos.length;

        if (photosLength > 0) {
            const photosTemp = responsePexels.photos.map(photo => {
                return photo.src.large2x;
            })
            photos.push(...photosTemp);
        }
    }

    const continents = responseBack4App.data.results.map((continent, index) => {
        return {
            id: continent.objectId,
            name: continent.name,
            image: photos[index],
            path: continent.name.toLocaleLowerCase().replace(' ', '-'),
            shortDescription: 'O continente mais antigo do mundo',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing,lorem ipsum dolor sit amet, consectetur adipiscing'
        }
    });

    return {
        props: {
            continents
        },
        revalidate: 60 * 60 * 60
    }
}