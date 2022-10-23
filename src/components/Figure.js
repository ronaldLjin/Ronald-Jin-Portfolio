import { Center, Stack, Text } from "@chakra-ui/react"

export default function Figure({ figure, num, caption }) {
    return (
        <Center>
            <Stack>
                <Center backgroundColor={"whiteAlpha.800"}>
                    {figure}
                </Center>
                <Text><Text as="span" fontWeight={"bold"}>Figure {num}:</Text> {caption}</Text>
            </Stack>
        </Center>
    )
}