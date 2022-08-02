import { Box, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

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
            padding={5}
        >
            <Flex
                maxW={isWideScreen ? 820 : 700}
                margin="0 auto"
            >
                <VStack spacing={2} align="start">
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
            </Flex>
        </Box >
    );
}