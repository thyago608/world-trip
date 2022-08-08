import { Flex, Text } from "@chakra-ui/react";
import { Label } from "./Label";

export function Description() {
    return (
        <Flex
            maxW={{ base: "1100px", xl: "1200px" }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis nemo nulla odit. Repudiandae adipisci hic magnam in doloremque. Atque praesentium repudiandae nesciunt ex voluptate. Aliquid alias delectus ad expedita?
            </Text>
            <Flex
                justify="space-between"
                gap={8}
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