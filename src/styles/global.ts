import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  html {
    --black: rgba(36, 36, 36, 0.9);
    --pink: rgba(255, 197, 249, 0.9);
    --white: 	rgba(255,255,255, 0.85);
    --beige: rgba(229, 229, 229, 0.9);
  }

  body{
    background: var(--black);
    color: var(--white);
    -webkit-font-smoothing: antialiased;  
    height: 100vh;  
    width: 100vw; 
  }

  body, input, button{
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    font-size: 17px;
  }  
`;
