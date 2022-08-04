import { VStack, Text } from "@chakra-ui/react";

interface LabelProps {
    heading: number;
    text: string;
}

export function Label({ heading, text }: LabelProps) {
    return (
        <VStack align="center">
            <Text
                as="strong"
                color="yellow.100"
                fontWeight="semibold"
                fontSize={{ base: "2xl", lg: "3xl" }}
            >
                {heading}
            </Text>
            <Text fontSize="xl" fontWeight={{ base: "normal", lg: "semibold" }}>{text}</Text>
        </VStack>
    );
}