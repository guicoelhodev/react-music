import { Player } from "components/refactor/Player";
import React from "react";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
`;

export const Playground: FC = () => {
  return (
    <Container>
      <Player />
    </Container>
  );
};
