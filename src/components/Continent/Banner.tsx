import { Flex, Text, VStack } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            as="section"
            h={['150px', '200px', '300px', '450px']}
            align="center"
            backgroundImage="url('/images/banner-continent.svg')"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="bottom"
        >
            <VStack
                w="100%"
                maxW={{ base: "945px", xl: "1000px" }}
                h={{ base: '150px', lg: '300px' }}
                margin="0 auto"
                justify={{ base: 'center', lg: 'flex-end' }}
                align={{ base: 'center', lg: "flex-start" }}
            >
                <Text
                    fontWeight="semibold"
                    fontSize={{ base: '28px', lg: '48px' }}
                    color="white.50"
                >
                    Europa
                </Text>
            </VStack>
        </Flex>
    );
}