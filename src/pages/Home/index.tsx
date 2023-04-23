import React, { useEffect } from "react";
import { InfiniteScroll } from "components/InfiniteScroll";
import { MobilePlayer } from "components/MobilePlayer";
import { MusicItem } from "components/MusicItem";
import { Player } from "components/Player";
import { Search } from "components/Search";
import { IoHeadsetSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useSearchMusic } from "services/http/GET/useSearchMusics";
import { useTopWorldMusic } from "services/http/GET/useTopWorldMusics";
import { useFavoriteMusicsStore } from "../../store/useFavoriteMusicsStore";
import { usePlayerStore } from "../../store/usePlayerStore";

import * as S from "./style";

export const Home = () => {
  const { handleCurrentPlaylist, currentPlaylist, search } = usePlayerStore();
  const { favoriteMusics } = useFavoriteMusicsStore();

  const isDesktop = useMediaQuery({ minWidth: 1000 });

  const { data: musicWorldData, fetchNextPage } = useTopWorldMusic(20);

  const { data: musicSearchData } = useSearchMusic({
    inputValue: search.inputValue,
  });

  const getAllTracks = () => {
    const allTracks = musicWorldData?.pages.flat().map((i) => i.tracks.data);
    handleCurrentPlaylist(allTracks?.flat()!);
  };

  const handlePlaylistContent = () => {
    if (search.inputValue) return handleCurrentPlaylist(musicSearchData?.data!);
    if (search.playlistType === "my_playlist")
      return handleCurrentPlaylist(favoriteMusics);
    else return getAllTracks();
  };

  useEffect(() => {
    if (search.playlistType === "top_100" && !search.inputValue) {
      getAllTracks();
    }
  }, [musicWorldData?.pages]);

  useEffect(() => {
    handlePlaylistContent();
  }, [search.inputValue, search.playlistType, musicSearchData?.data]);

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
