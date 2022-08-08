import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Categorie } from "./Categorie";

const categories = [
    {
        icon: "/images/cocktail.svg",
        title: "vida norturna",
        position: "flex-start"
    },
    {
        icon: "/images/surf.svg",
        title: "praia",
        position: "flex-end"
    },
    {
        icon: "/images/building.svg",
        title: "moderno",
        position: "flex-start"
    },
    {
        icon: "/images/museum.svg",
        title: "clássico",
        position: "flex-end"
    },
    {
        icon: "/images/earth.svg",
        title: "e mais...",
        position: "center"
    },
];

export function Categories() {
    const isWideScreen = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    });

    const gridStyle = {
        templateColumns: isWideScreen ? 'repeat(5, 1fr)' : 'repeat(2, 1fr)',
        templateAreas: isWideScreen ? `"item0 item1 item2 item3 item4"` :
            `"item0 item1"
             "item2 item3"
             "item4 item4"`
    };

    return (
        <Grid
            as="section"
            margin="2rem auto"
            maxW={{ base: "600px", lg: "1100px" }}
            p={8}
            gap={27}
            {...gridStyle}
        >
            {categories.map((categorie, index) => (
                <GridItem key={categorie.title} area={`item${index}`}>
                    <Categorie
                        icon={categorie.icon}
                        title={categorie.title}
                        position={isWideScreen ? "flex-start" : categorie.position}
                    />
                </GridItem>
            ))}
        </Grid>
    );
}