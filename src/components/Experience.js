import { Text, Heading, List, ListItem, UnorderedList, Stack, } from "@chakra-ui/react";

export default function Experience({ title, company, location, start, end, desc }) {
    return (
        <Stack spacing={1}>
            <Text>{!end ? <Text as="span">({start} - Present)</Text> : <Text as="span">({start} - {end})</Text>}: <Text as="span" fontWeight={"bold"}>{title} </Text> - {company}</Text>
            <Text>{desc}</Text>
        </Stack>
    )
}