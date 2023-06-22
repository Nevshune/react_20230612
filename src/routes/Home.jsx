import { Box, Button, Grid, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/carouselSilck";
import CardItems from "../components/carditem";
import TitleImageSkew from "../components/TitleImageSkew";


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

        {/* 캐러셀 */}
        <Box>
            <CarouselSlick />
        </Box>

        {/* 특장점 */}
        <HStack justifyContent="center" py="16" bg="gray.100">
            <Grid gap="4" w="7xl" templateColumns={"repeat(3, 1fr)"}>
                {
                    featuresLists.map((item, i) => (
                        <CardItems key={i} item={item} />
                    ))
                }
            </Grid>
        </HStack>

        {/*기울어진 이미지 타이틀 */}
        <TitleImageSkew
            title="comics"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque facere hic et ipsum nam, placeat ullam aut assumenda exercitationem neque fuga. Suscipit nam consectetur corrupti. Dolorum quo eos atque adipisci."
            imgUrl="https://ca-times.brightspotcdn.com/dims4/default/22b0a7a/2147483647/strip/true/crop/3000x2000+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fa6%2Fe87f0359453fb95ff85a286837e8%2Fla-et-marvel-is-doing-just-fine-for-now-but-even-its-fans-are-at-a-tipping-point.jpg"
        />
        {/* Comics 콘텐츠 리스트 */}
        <VStack w="full" position="relative" h="400px">
            {/* 흰박스 위로 올라오게 하는 범위 지정 */}
            <Box
                position="absolute"
                w="7xl"
                h="400px"
                top={-16}
                bg="white"
            >


            </Box>
        </VStack>


    </>
}