import { MusicItem } from "components/refactor/MusicItem";
import { Player } from "components/refactor/Player";
import { Search } from "components/refactor/Search";
import React from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { useTopWorldMusic } from "services/http/GET/useTopWorldMusics";
import * as S from "./style";

export const Home = () => {
  const { data } = useTopWorldMusic(20);

  const tracks = data?.pages.flat().map((i) => i.tracks)[0].data;

  console.log(tracks);
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

        <S.Main>
          <section>
            <Player />
          </section>

          <S.MusicNav>
            <Search />

            <ul>
              {tracks?.map((track) => (
                <MusicItem {...track} />
              ))}
            </ul>
          </S.MusicNav>
        </S.Main>
      </S.Container>
    </S.Layout>
  );
};
