import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { RxEnter } from "react-icons/rx"


export default function TitleImageSkew({title, description, imgUrl}) {
  return (
    <HStack w="full" h="400px" bg="gray.800" position="relative" overflow="hidden">
            {/* 1번 자식(왼) */}
            <Box w="50%" h="full" >
                {/* 빈박스 기울어짐 */}
                <Box bg="gray.800" w="full" h="full"
                    transform={"rotate(-10deg) scale(1.5) translateY(40px)"} >
                </Box>
            </Box>
            {/* 2번째 자식(오) */}
            <Box w="50%" h="full" bg="blue.100">
                <Image
                    src={imgUrl}
                    alt=""
                    objectFit="cover"
                    objectPosition="center"
                />
            </Box>
            {/* 3번째 자식(위치 고정) */}
            <VStack
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                alignItems="center"  
                justifyContent="center"   >
                <VStack w="7xl" h="full" alignItems="flex_start" justifyContent="center">
                    <Text color="white" fontWeight="700" fontSize="32">
                        {title}
                    </Text>
                    <Text color="white" w="3xl">
                        {description}
                    </Text>
                    <Button
                        w="3xl"
                        mt="6"
                        textTransform="uppercase"
                        variant="outline"
                        colorScheme="red"
                        aria-label="Comics Button"
                        rightIcon={<RxEnter />}
                    >
                        List more
                    </Button>


                </VStack>
            </VStack >
        </HStack>
  )
}
