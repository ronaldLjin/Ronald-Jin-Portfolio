import { Box, Heading, Text, Stack, Flex, Wrap } from "@chakra-ui/react"
import Experience from "./components/Experience"
import Project from "./components/Project"
import iracing from './assets/images/iracing-insights.png';
import cpucv from './assets/images/cpucv.png';
import chaz from './assets/images/chazsmith.png';
import sofa from './assets/images/sofa.png';

export default function Home() {
    return (
        <Stack p="50px 10vw 0px 10vw" spacing={6} as="samp">
            <Heading>Ronald Jin</Heading>
            <Text>Hi, I am a first year Systems Design Engineering Student at the University of Waterloo. I am passionate about software development, specifically in web design and development. I am also interested in learning more about computer hardware, data science, and mathematics. </Text>
            <Stack spacing={3}>
                <Heading size={"md"}>Experience</Heading>
                <Experience
                    title={"Research Assistant"}
                    company={"McMaster University: Canadian Network for Modelling Infectious Diseases"}
                    start={"May 2022"}
                    desc={"I am working on developing epidemiological tools aimed at supporting research and public health applications. I am primarily working with technologies like FastAPI (Python) and Shiny (R) to build a web API and data visualization application aimed at making large epidemiological datasets publicly available."}
                />
                <Experience
                    title={"Front-End Developer"}
                    company={"BeTheChangeYYC"}
                    start={"Mar. 2022"}
                    desc={"Created informative websites using HTML, CSS, PHP, JavaScript, and WordPress for BeTheChangeYYC, a charitable organization aimed at assisting the homeless in Calgary"}
                />
            </Stack>
            <Stack spacing={3}>
                <Heading as="h2" size="md">Projects</Heading>
                <Wrap spacing={4}>
                    <Project
                        title={"iRacing Insights"}
                        desc={"Full-stack web app displaying real-time player statistics for the iRacing racing simulator"}
                        tech={["React", "Flask", "Python", "MongoDB"]}
                        link={"https://iracing-insights-frontend-ronaldljin.vercel.app/"}
                        image={iracing}
                    />
                    <Project
                        title={"Calgary Pop-Up Care Village"}
                        desc={"Designed and developed the website for the Calgary Pop-Up Care Village: a festival for anyone experiencing systemic vulnerabilities such as homelessness and addiction."}
                        tech={["HTML5", "CSS", "JavaScript", "Swiper"]}
                        link={"https://c-pucv.ca/"}
                        image={cpucv}
                    />
                    <Project
                        title={"chazsmith.ca"}
                        desc={"Designed and developed a website and blog for Chaz Smith, an activist, LGBTQ & homeless rights advocate, and founder & CEO of BeTheChangeYYC Street Outreach."}
                        tech={["HTML5", "CSS", "JavaScript", "PHP", "WordPress", "Carbon Fields"]}
                        link={"http://chazsmith.ca/"}
                        image={chaz}
                    />
                    <Project
                        title={"Extension of The Moving Sofa Problem"}
                        desc={"In this \"research project,\" I attempt to provide a solution to the an extension of the Moving Sofa Problem: what is the longest length of a shape that can be maneuvered through a unit-width L-shaped corridor?"}
                        tech={["LaTeX", "Mathematica", "GeoGebra", "KaTeX"]}
                        link={"/extension-of-the-moving-sofa-problem"}
                        image={sofa}
                    />
                </Wrap>
            </Stack>
        </Stack>
    )
}