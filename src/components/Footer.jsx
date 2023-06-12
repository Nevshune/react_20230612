import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { FaTumblr, FaSnapchatGhost, FaPinterest } from "react-icons/fa"
export default function Footer() {
    return (
        <HStack w="full" bg="gray.800" h="300px" py="20"
            justifyContent="center" alignItems="flex start"
        >
            <Grid w={{
                md: "3xl",
                lg: "5xl",
                xl: "7xl"
            }} h="full" templateColumns={{
                sm: "1fr",
                xl: "1fr 1fr 1fr 1fr"
            }} gap={4}>
                <GridItem >
                    <Box w="40">
                        <Image src="https://1000logos.net/wp-content/uploads/2021/06/Marvel-Comics-logo-500x281.png" alt="logo" />
                    </Box>
                </GridItem>
                <GridItem w="full">
                    <HStack w="full" spacing={8}>
                        <VStack color="gray.100" fontWeight={600} alignItems="flex-start">
                            <Text>ABOUT MARVEL</Text>
                            <Text>HELP/FAQS</Text>
                            <Text>CAREER</Text>
                            <Text>INTERNSHIP</Text>
                        </VStack>
                        <VStack color="gray.200" alignItems="flex-start">
                            <Text>ADVERTISING</Text>
                            <Text>DISNEY++</Text>
                            <Text>MARVELHQ.COM</Text>
                            <Text>REDEEM DIGITAL COMICS</Text>
                        </VStack>
                    </HStack>
                </GridItem>
                <GridItem>
                    <VStack w="full" spacing={6}>
                        <HStack spacing={6}>
                            <Image src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="footer1" />
                            <VStack alignItems="flex-start" spacing={0}>
                                <Text color="white" fontWeight={600} justifyContent="flex">MARVEL INSIDER</Text>
                                <Text color="gray.400">Get Rewarded for Being a Marvel Fan</Text>
                            </VStack>
                        </HStack>
                        <HStack spacing={6}>
                            <Image src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="footer2" />
                            <VStack alignItems="flex-start" spacing={0}>
                                <Text color="white" fontWeight={600} justifyContent="flex">MARVEL UNLIMITED</Text>
                                <Text color="gray.400">Access Over 30,000+ Digital Comics</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </GridItem>
                <GridItem w="full">
                    <VStack align="flex-start" spacing={8}>
                        <Text
                            fontWeight={600}
                            color="gray.100"
                        >
                            FALLOW MARVEL
                        </Text>
                        <Grid
                            fontSize={24}
                            color="gray.300"
                            templateColumns={"repeat(4,1fr)"}
                            gap={8}
                        >
                            <GridItem><AiFillFacebook /></GridItem>
                            <GridItem><AiOutlineTwitter /></GridItem>
                            <GridItem><AiFillInstagram /></GridItem>
                            <GridItem><FaTumblr /></GridItem>
                            <GridItem><AiFillYoutube /></GridItem>
                            <GridItem><FaSnapchatGhost /></GridItem>
                            <GridItem><FaPinterest /></GridItem>
                        </Grid>
                    </VStack>

                </GridItem>
            </Grid>
        </HStack>
    )
}