import { Box, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function CarouselSlick(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true
      };
    return(
        <Box w="full" h="full">
            <Slider {...settings}>

            <HStack 
            w="full" 
            h="450px" 
            backgroundImage={"url('https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg')"} 
            backgroundSize="cover"
            >
            </HStack>

            <HStack 
            w="full" 
            h="450px" 
            backgroundImage={"url('https://www.showmetech.com.br/wp-content/uploads//2021/12/filmes-da-marvel-6-1920x1024.jpg')"} 
            backgroundSize="cover"
            >
            </HStack>
            
            </Slider>

        </Box>
    )
}