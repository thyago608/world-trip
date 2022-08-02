import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

type CategorieProps = {
  icon: string;
  title: string;
};

export function Categorie({ icon, title }: CategorieProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const imageSize = isDesktop
    ? {
        width: "50px",
        height: "50px",
      }
    : {
        width: "10px",
        height: "10px",
      };

  return (
    <Flex gap="2" direction={isDesktop ? "column" : "row"} align="center">
      <Image
        src={isDesktop ? icon : "/images/ellipse.svg"}
        alt={title}
        {...imageSize}
      />
      <Text color="gray.500" fontWeight="500" fontSize="lg">
        {title}
      </Text>
    </Flex>
  );
}
