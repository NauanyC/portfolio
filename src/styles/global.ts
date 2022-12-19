import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    background: rgba(36, 36, 36, 0.9);
    color: rgba(229, 229, 229, 0.9);
    -webkit-font-smoothing: antialiased;   
  }
  body, input, button{
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }  
`;
