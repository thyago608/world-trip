import Head from "next/head";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { Box, Text, VStack, Grid } from "@chakra-ui/react";
import { Banner, Description, City } from "components/Continent";
import { Continent as ContinentType } from "types/continent";
import { api } from "services/api";
import { pexels } from "services/pexels";
import { Back4AppCitiesList, Back4AppContinent } from "types/back4app";
import { continentImages } from "lib/continentImages";
import { City as CityType } from "types/city";
import { useRouter } from "next/router";
import { AirplaneAnimation } from "components/Airplane";

interface ContinentProps {
    continent: ContinentType & {
        cities: CityType[];
    };
}

export default function Continent({ continent }: ContinentProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

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
            router.events.off('routeChangeComplete', handleStop);
        }

    }, [router.events])

    return (
        <>
            <Head>
                <title>{continent.name} | WorldTrip</title>
            </Head>
            <motion.main
                initial={{ opacity: 0, x: -300 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    style={{ position: 'relative' }}
                    animate={{ opacity: loading ? 0.5 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Banner continent={continent} />
                    <Box as="section" mt={{ base: "16px", lg: "60px" }}>
                        <Description />
                    </Box>
                    <VStack
                        maxW={{ base: "1100px", xl: "1200px" }}
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
                        {continent.cities.length > 0 ?
                            <Grid
                                gridTemplateColumns={{ md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
                                gap={{ base: '20px', lg: "45px" }}
                                px={{ md: 4, lg: 0 }}
                            >
                                {continent.cities.map(city => (
                                    <City key={city.id} city={city} />
                                ))}
                            </Grid>
                            : <Text
                                w="100%"
                                textAlign="center"
                            >Desculpe, erro ao carregar as informações do servidor
                            </Text>
                        }
                    </VStack>
                    {loading && <AirplaneAnimation invert={true} />}
                </motion.div>
            </motion.main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (request) => {
    const { query } = request;
    const page = Math.floor(Math.random() * 20 + 1);

    const citiesPhotos: string[] = [];

    const responsePexels = await pexels.photos.search({ query: "city", page, per_page: 10 });

    const responseBack4AppContinent = await api.get<Back4AppContinent>(`https://parseapi.back4app.com/classes/Continentscountriescities_Continent/${query.id}`);

    const responseBack4AppCities = await api.get<Back4AppCitiesList>('/classes/Continentscountriescities_City?limit=10&include=country,country.continent&keys=name,country,country.name,country.continent.name,population,location,cityId,adminCode');

    const citiesFilter = responseBack4AppCities.data.results.filter(city => {
        if (city.country.continent.name === responseBack4AppContinent.data.name) {
            return city;
        }
    });

    if ("photos" in responsePexels) {
        const photosLength = responsePexels.photos.length;

        if (photosLength > 0) {
            const photos = responsePexels.photos.map(photo => {
                return photo.src.large2x;
            })

            citiesPhotos.push(...photos);
        }
    }

    const continentFormatted = responseBack4AppContinent.data && {
        id: responseBack4AppContinent.data.objectId,
        name: responseBack4AppContinent.data.name,
        image: citiesPhotos[citiesPhotos.length - 1],
        path: responseBack4AppContinent.data.name.toLowerCase().replace(' ', '-'),
        shortDescription: 'O continente mais antigo do mundo',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing,lorem ipsum dolor sit amet, consectetur adipiscing',
        cities: citiesFilter.map((city, index) => {
            return {
                id: city.cityId,
                name: city.name,
                image: citiesPhotos[index],
                country: city.country.name,
                countryFlag: '/images/flag.png'
            }
        })
    }

    return {
        props: {
            continent: continentFormatted
        }
    }
};