import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

interface CategorieProps {
  icon: string;
  title: string;
}

export function Categorie({ icon, title }: CategorieProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: false,
    lg: true
  });

  const imageVersion = isWideScreen ? icon : "/images/ellipse.svg";
  const heightVersion = isWideScreen ? "85px" : 2;

  return (
    <Flex>
      <Image h={heightVersion} src={imageVersion} alt={title} />
      <Text>{title}</Text>
    </Flex>
  );
}