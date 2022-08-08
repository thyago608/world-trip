import Link from "next/link";
import { Box, VStack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Continent } from "types/continent";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ContinentsSliderProps {
    continents: Continent[];
}

export function ContinentsSlider({ continents }: ContinentsSliderProps) {

    return (
        <Box h={300} m="0 auto" mb={6} maxW={1100}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                {continents?.map(continent => (
                    <SwiperSlide key={continent.id}>
                        <Box
                            w="100%"
                            h="100%"
                            backgroundImage={`url(${continent.image})`}
                            backgroundColor="black"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundPosition="bottom"
                        >
                            <Link href={{
                                pathname: `/continent/${continent.path}`,
                                query: { id: continent.id }
                            }}>
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
                                        {continent.name}
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="gray.50"
                                    >
                                        {continent.shortDescription}
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