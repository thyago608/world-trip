import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { City } from "types/city";

interface CityProps {
    city: City;
}

export function City({ city }: CityProps) {
    return (
        <VStack maxW={256} spacing="none">
            <Image
                src={city.image}
                fallbackSrc="/vercel.svg"
                alt={city.name}
                borderRadius={1}
                title={city.name}
                w="100%"
                h={175}
            />
            <Flex
                width="100%"
                h={150}
                justify="space-between"
                align="center"
                p="1.125rem 1.5rem 1.563rem"
                borderWidth={1}
                borderTop={0}
                borderRadius={4}
                borderColor="rgba(255, 186, 8, 0.5)"
            >
                <VStack align="flex-start">
                    <Text
                        as="strong"
                        fontWeight="semibold"
                        fontSize="xl"
                    >
                        {city.name}</Text>
                    <Text
                        as="span"
                        fontWeight="medium"
                        fontSize="md"
                        color="gray.300"
                    >{city.country}</Text>
                </VStack>
                <Image
                    w={30}
                    h={30}
                    src={city.countryFlag}
                    fallbackSrc="/favicon.ico"
                    alt={city.country}
                    title={city.country}
                />
            </Flex>
        </VStack>
    );
}