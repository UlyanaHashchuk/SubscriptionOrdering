import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    box-sizing: border-box; 
    margin: 0px; 
    padding: 0px;
    height: 100%;
    font-family: Arial;
    background-color: #202329;
    color: white;

    & > * {
      height: 100%;
    }
  }
`
