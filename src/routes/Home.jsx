import { Box } from "@chakra-ui/react";
import CarouselSlick from "../components/carouselSilck";

export default function Home(){
    return(
        // 캐러셀
        <Box h="400vh">
            <CarouselSlick />
        </Box>
    )
}