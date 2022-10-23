import {
    Button,
    Stack,
    Text,
    Wrap,
    Heading,
    Tag,
    Link,
    Image,
    transition,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/style.css';
import { useState } from 'react';

export default function Project({ title, desc, tech, link, image }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isEndScroll, setIsEndScroll] = useState('r')

    const swiperGradients = {
        'r': "linear-gradient(to right, transparent 0%, black 0% 80%, transparent 100%)",
        'l': "linear-gradient(to left, transparent 0%, black 0% 80%, transparent 100%)",
        'rl': "linear-gradient(to right, transparent 0%, black 20% 80%, transparent 100%)" 
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent m={6}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={3}>
                            <Link h={"40%"} href={link} isExternal>
                                <Image
                                    src={image}
                                    filter="brightness(0.8)"
                                    _hover={{
                                        filter: "brightness(1)",
                                        transition: "all 0.2s"
                                    }}
                                    h={"100%"}
                                    w={"100%"}
                                    objectFit={"cover"}
                                />
                            </Link>
                            <Wrap spacing={15}>
                                {tech.map((item) => (
                                    <Tag key={item} whiteSpace={"nowrap"}>
                                        {item}
                                    </Tag>
                                ))}
                            </Wrap>
                            <Text>{desc}</Text>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Link href={link} isExternal mr={15}><Button colorScheme={'teal'}>View</Button></Link>
                        <Button variant='outline' colorScheme='teal' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Stack spacing={2} borderWidth='1px' borderRadius='lg' w={{ sm: '100%', lg: '300px'}} overflow='hidden' minH={450} pos={"relative"} className={"project"}>
                <Link h={"40%"} href={link} isExternal>
                    <Image
                        src={image}
                        filter="brightness(0.8)"
                        _hover={{
                            filter: "brightness(1)",
                            transition: "all 0.2s"
                        }}
                        h={"100%"}
                        w={"100%"}
                        objectFit={"cover"}
                    />
                </Link>
                <Stack p={4}>
                    <Heading as="h3" size="sm" noOfLines={1}>{title}</Heading>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={15}
                        style={{ maskImage: swiperGradients[isEndScroll]}}
                        onProgress = {
                            (swiper, progress) => {
                                if (progress >= 1) 
                                {
                                    setIsEndScroll('l')
                                } else if (progress < 1 && progress > 0)
                                {
                                    setIsEndScroll('rl')
                                } else
                                {
                                    setIsEndScroll('r')
                                }
                            }
                        }
                    >
                        {tech.map((item) => (
                            <SwiperSlide className="project-slider">
                                <Tag key={item} whiteSpace={"nowrap"}>
                                    {item}
                                </Tag>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Text noOfLines={3}>{desc}</Text>
                </Stack>
                <HStack spacing={4} pos={"absolute"} bottom={4} left={4}>
                    <Link href={link} isExternal><Button colorScheme='teal'>View</Button></Link>
                    <Button colorScheme='teal' variant='outline' onClick={onOpen}>Learn More</Button>
                </HStack>
            </Stack>
        </>
    )
}