import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


 * {
        font-family: 'Montserrat', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    li {
        list-style:none;
    }

    button {
      cursor:pointer;

      :active {
        filter: brightness(0.9);
      }
    }    
`;
