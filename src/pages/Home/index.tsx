import { InfiniteScroll } from "components/InfiniteScroll";
import { MobilePlayer } from "components/refactor/MobilePlayer";
import { MusicItem } from "components/refactor/MusicItem";
import { Player } from "components/refactor/Player";
import { Search } from "components/refactor/Search";
import React, { useEffect } from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useTopWorldMusic } from "services/http/GET/useTopWorldMusics";
import { usePlayerStorie } from "../../zustand/usePlayerStorie";

import * as S from "./style";

export const Home = () => {
  const { data, fetchNextPage } = useTopWorldMusic(20);
  const { handleCurrentPlaylist, currentPlaylist } = usePlayerStorie();

  const isDesktop = useMediaQuery({ minWidth: 1000 });

  const getAllTracks = () => {
    const allTracks = data?.pages.flat().map((i) => i.tracks.data);
    handleCurrentPlaylist(allTracks?.flat()!);
  };

  useEffect(() => {
    getAllTracks();
  }, [data]);

  return (
    <S.Layout>
      <S.Container>
        <S.Header>
          <S.Logo>
            <IoHeadsetSharp />
            <h1>React Music</h1>
          </S.Logo>

          {!isDesktop && <MobilePlayer />}
        </S.Header>

        <S.Main>
          {isDesktop && (
            <section>
              <Player />
            </section>
          )}
          <S.MusicNav>
            <Search />

            <ul>
              {currentPlaylist?.map((track) => (
                <MusicItem {...track} />
              ))}
              <InfiniteScroll loadMore={() => fetchNextPage()} />
            </ul>
          </S.MusicNav>
        </S.Main>
      </S.Container>
    </S.Layout>
  );
};
