import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secundary: string,

      dark: string,
      light: string,

      background: string,
      text: string,
    }
  }
}