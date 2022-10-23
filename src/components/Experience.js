import { Text, Heading, List, ListItem, UnorderedList, Stack, } from "@chakra-ui/react";

export default function Experience({ title, company, location, start, end, desc, department }) {
    return (
        <Stack spacing={1}>
            <Text fontWeight={"bold"}>{!end ? <Text as="span">({start} - Present)</Text> : <Text as="span">({start} - {end})</Text>}: {title} - <Text as="span" color={"teal.500"}>{company}</Text>{department && <Text as="span">: </Text>}{department && <em>{department}</em>}</Text>
            <Text>{desc}</Text>
        </Stack>
    )
}