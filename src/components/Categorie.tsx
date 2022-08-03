import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

interface CategorieProps {
  icon: string;
  title: string;
  position: string;
}

export function Categorie({ icon, title, position }: CategorieProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: false,
    lg: true
  });


  const imageProps = {
    src: isWideScreen ? icon : "/images/ellipse.svg",
    height: isWideScreen ? "75px" : "2",
  };

  return (
    <Flex
      align="center"
      flexDir={isWideScreen ? "column" : "row"}
      gap={2}
      justify={position}
    >
      <Image {...imageProps} alt={title} />
      <Text fontSize="xl" fontWeight="medium">{title}</Text>
    </Flex>
  );
}