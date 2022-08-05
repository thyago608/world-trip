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
                alt={city.city}
                borderRadius={1}
            />
            <Flex
                width="100%"
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
                        {city.city}</Text>
                    <Text
                        as="span"
                        fontWeight="medium"
                        fontSize="md"
                        color="gray.300"
                    >{city.country}</Text>
                </VStack>
                <Image
                    src={city.countryFlag}
                    alt={city.country}
                    w={30}
                    h={30}
                />
            </Flex>
        </VStack>
    );
}