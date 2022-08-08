import { Box, Flex, Text, VStack, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isWideScreen = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    });

    return (
        <Box
            as="section"
            backgroundImage={"url('/images/background-desktop.svg')"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            padding={5}
        >
            <Flex
                maxW={isWideScreen ? 1000 : 700}
                margin="0 auto"
                justify="space-between"
            >
                <VStack mt={2} spacing={2} align="start" justify="center">
                    <Text
                        fontWeight="medium"
                        fontSize="xl"
                        color="white.50"
                    >
                        5 Continentes,<br /> infinitas possibilidades.
                    </Text>
                    <Text
                        fontWeight="normal"
                        fontSize="sm"
                        color="gray.50"
                        width={isWideScreen ? 420 : 'auto'}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </VStack>

                {isWideScreen &&
                    <Box position="relative" top="40px">
                        <Image
                            h={200}
                            src="/images/airplane.svg"
                            alt="Avião"
                            title="Avião"
                        />
                    </Box>}
            </Flex>
        </Box >
    );
}