import { HStack, Wrap, Switch, useColorMode, Link, Button, IconButton } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header>
            <HStack p="25px 10vw 25px 10vw" as="samp">
                <Wrap align="center" spacing={6}>
                    <Link href="/">Home</Link>
                    <Link href="mailto:r7jin@uwaterloo.ca"><IconButton icon={<EmailIcon />}></IconButton></Link>
                    <Link href="https://www.linkedin.com/in/ronald-jin/" isExternal><IconButton icon={<AiFillLinkedin />}></IconButton></Link>
                    <Link href="https://github.com/ronaldLjin" isExternal><IconButton icon={<AiFillGithub />}></IconButton></Link>
                    <Switch onChange={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Switch>
                </Wrap>
            </HStack>
        </header>
    )
}