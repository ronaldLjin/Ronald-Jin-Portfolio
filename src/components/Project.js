import {
    Button,
    Stack,
    Text,
    Wrap,
    Heading,
    Tag,
    Link,
    Image,
    transition
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/style.css';

export default function Project({ title, desc, tech, link, image }) {
    return (
        <Stack spacing={2} borderWidth='1px' borderRadius='lg' w={300} overflow='hidden' h={450} pos={"relative"}>
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
                <Heading as="h3" size="sm">{title}</Heading>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={15}
                    style={{maskImage: "linear-gradient(to right, transparent 0%, black 0% 80%, transparent 100%)"}}
                >
                    {tech.map((item) => (
                        <SwiperSlide className="project-slider">
                            <Tag key={item} whiteSpace={"nowrap"}>
                                {item}
                            </Tag>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Text>{desc}</Text>
            </Stack>
            <Link href={link} isExternal pos={"absolute"} bottom={4} left={4}><Button>View</Button></Link>
        </Stack>
    )
}