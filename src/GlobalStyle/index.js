import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    box-sizing: border-box;
    margin:0;
    padding:0;
    width:100%;
    min-height:100vh;
    height:100%;
    background-color: var(--white);

    * {
        font-family: 'Montserrat', sans-serif;
        margin:0;
        padding:0;
    }

    li {
        list-style:none;
    }

    button {
      &:focus {
        outline:2px solid var(--orange);
      }
    }

    
}

:root {
    --orange        : #F39200;
    --light-orange  : #F3EBCC;
    --whitesmoke    : #EDEDED;
    --white         : #ffffff;
    --gray          : #DEDEDE;
    --black         : #222222;

}
`;
export default GlobalStyle;

export const CenterContent = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  max-width: 1280px;
  height: auto;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: auto;
  padding: 60px 0;
`;
