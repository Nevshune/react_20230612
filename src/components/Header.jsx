import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [scroll, setScroll] = useState(true)
    const [winscroll, setWinscroll] = useState(true)
    useEffect(() => {
        document.addEventListener("wheel", (event) => {
            if (event.deltaY < 0) {
                setScroll(true);
            } else if (event.deltaY > 0) {
                setScroll(false);
            };

            if (event.deltaY < 0) {
                setWinscroll(true);
            } else if (event.deltaY > 0) {
                setWinscroll(false);
            }
        })
    })
    const { colorMode, toggleColorMode } = useColorMode();
    const GNB = [
        { title: "home", href: "/" },
        { title: "characters", href: "/characters" },
        { title: "comics", href: "/comics" },
        { title: "events", href: "/events" }
    ]

    const location = useLocation();

    const link = document.location.href;
    const array = link.split('3000/')[1]
    console.log(array)

    return <Stack
        bg={winscroll ? "transparent" : "gray.200"}
        transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
        transition="0.3s"
        w="full"
        h="60px"
        fontWeight={600}
        fontSize="20px"
        alignItems="center"
        justifyContent="center"
        boxShadow="sm"
        position="fixed"
        zIndex="65535"
    >
        <HStack w="7xl" h="full" justifyContent="space-between">
            <HStack>
                <Box>
                    <Image src="https://1000logos.net/wp-content/uploads/2021/06/Marvel-Comics-logo-500x281.png" alt="Main logo" height="60px"></Image>
                </Box>
                <HStack color="" textTransform="uppercase" spacing={5}>
                    {GNB.map((item) => (
                        <Link to={item.href} key={item.title} aria-label={item.title}>
                            <Text color={item.href === location.pathname ? "red" : ""}>{item.title}</Text>
                        </Link>
                    ))}


                    {/* <Link to="/"><Text>Home</Text></Link>
                    <Link to="/characters"><Text>characters</Text></Link>
                    <Link to="/comics"><Text>comics</Text></Link>
                    <Link to="/events"><Text>events</Text></Link> */}
                </HStack>
            </HStack>
            <Button
                onClick={toggleColorMode}
            >
                {
                    colorMode === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />
                }
            </Button>
        </HStack>


    </Stack>
}