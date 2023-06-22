import { Box, Grid, HStack } from "@chakra-ui/react";
import CarouselSlick from "../components/carouselSilck";
import CardItems from "../components/carditem";


export default function Home() {
    const featuresLists = [
        {
            title: "스마트웹3기",
            description: "ehdgoanfrhk",
            buttionText: "자세히보기"
        },

        {
            title: "스마트웹3기",
            description: "ehdgoanfrhk",
            buttionText: "자세히보기"
        },

        {
            title: "스마트웹3기",
            description: "ehdgoanfrhk",
            buttionText: "자세히보기"
        }
    ];

    return <>
        <Box>
            <CarouselSlick />
        </Box>


        <HStack justifyContent="center" py="16" bg="gray.100">
            <Grid gap="4" w="7xl" templateColumns={"repeat(3, 1fr)"}>
                {
                    featuresLists.map((item, i) => (
                        <CardItems key={i} item={item} />
                    ))
                }
            </Grid>
        </HStack>
    </>
}