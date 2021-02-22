import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    background: #d9d9d9;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body {
    height: 100%;
  }
`;