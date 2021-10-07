import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const EmptyDiv = styled.div`
  position: relative;
  width: 320px;
  height: auto;
  background-color: var(--light-orange);

  @media (max-width: 890px) {
    display: none;
  }
`;
