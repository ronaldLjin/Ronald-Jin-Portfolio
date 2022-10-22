import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Wrap,
    Tag,
    Link
} from '@chakra-ui/react'

export default function Project({ title, desc, tech, link }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>{title}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Wrap spacing={4}>
                            {tech.map((item) => (
                                <Tag key={item}>
                                    {item}
                                </Tag>
                            ))}
                        </Wrap>
                        <Text>{desc}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Link href={link} isExternal>
                            <Button variant='ghost'>View</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}