import Link from "next/link";
import { Box, VStack, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const continents = [
    {
        title: "Europa",
        description: "O continente mais antigo",
    },
    {
        title: "África",
        description: "O continente mais antigo",
    },
    {
        title: "América",
        description: "O continente mais antigo",
    },
    {
        title: "Ásia",
        description: "O continente mais antigo",
    },
    {
        title: "Oceania",
        description: "O continente mais antigo",
    },
];

export function ContinentsSlider() {
    return (
        <Box h={300} m="0 auto" mb={6} maxW={1000}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.title}>
                        <Box
                            w="100%"
                            h="100%"
                            backgroundImage="url('/images/background-carousel.svg')"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                        >
                            <Link href="/continent/europa">
                                <VStack
                                    as="a"
                                    w="80%"
                                    h="100%"
                                    m="0 auto"
                                    justify="center"
                                    align="center"
                                    cursor="pointer"
                                >
                                    <Text
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        color="white.50"
                                    >
                                        {continent.title}
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="gray.50"
                                    >
                                        {continent.description}
                                    </Text>
                                </VStack>
                            </Link>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box >
    );
}