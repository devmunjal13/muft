import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background: #4A0404; //${({ theme }) => theme.colors.background};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;

    img {
      height: auto;
      max-width: 100%;
    }
    
  }
`

export default GlobalStyle
