import { Search } from "components/refactor/Search";
import React from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import * as S from "./style";

export const Home = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.Header>
          <S.Logo>
            <IoHeadsetSharp />
            <h1>React Music</h1>
          </S.Logo>

          <S.PlayerControls>d</S.PlayerControls>
        </S.Header>

        <Search />
      </S.Container>
    </S.Layout>
  );
};
