import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `monospace`,
    body: `monospace`,
  },
})

export default theme