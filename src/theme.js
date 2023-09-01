import { extendTheme } from '@chakra-ui/react'
import "./index.css"

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `NewCM10-Regular`,
    body: `NewCM10-Regular`,
  },
})

export default theme