import React from "react";
import { FC } from "react";
import { useTopWorldMusic } from "services/http/GET/useTopWorldMusics";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  background: linear-gradient(180deg, #d9c6f8 0%, #faf8ff 0%, #ffcddf 100%);
`;

export const Playground: FC = () => {
  const { data } = useTopWorldMusic(20);

  return <Container></Container>;
};
