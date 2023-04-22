import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;

  header {
    width: min(12rem, 100%);
    aspect-ratio: 1/1;
    border-radius: 5px;
    padding: 1rem;
  }

  display: flex;
  flex-direction: column;

  section {
    background: ${(p) => p.theme.colors.white};
  }
`;
