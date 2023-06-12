import { Button, Heading, VStack, Text, Link } from "@chakra-ui/react";

export default function NotFound() {
    return <VStack w="full" justifyContent="center" h="100vh">
        <Heading>404</Heading>
        <Text>페이지가 존재하지 않습니다</Text>
        <Link to="/"><Button>Go Home</Button></Link>
    </VStack>
}
