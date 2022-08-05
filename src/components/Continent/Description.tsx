import { Flex, Text } from "@chakra-ui/react";
import { Label } from "./Label";

export function Description() {
    return (
        <Flex
            maxW={{ base: "945px", xl: "1000px" }}
            margin="0 auto"
            flexDir={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={4}
            p={{ base: 4, lg: 0 }}
        >
            <Text
                fontSize="sm"
                fontWeight="normal"
                textAlign={{ base: "justify", md: "center", lg: "justify" }}
                w={{ base: "100%", lg: "400px" }}
            >
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia,
                a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Flex
                justify="space-between"
                paddingRight={{ base: 2, lg: 0 }}
                w={{ base: "100%", md: "500px", lg: "400px" }}
            >
                <Label heading={50} text="países" />
                <Label heading={60} text="línguas" />
                <Label heading={27} text="cidades +100" />
            </Flex>
        </Flex>
    );
}