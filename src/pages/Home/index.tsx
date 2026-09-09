import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoHeadsetSharp } from "react-icons/io5";
import { MdPlaylistPlay } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { InfiniteScroll } from "components/InfiniteScroll";
import { MobilePlayer } from "components/MobilePlayer";
import { MusicItem } from "components/MusicItem";
import { Player } from "components/Player";
import { Search } from "components/Search";
import { UpNext } from "components/UpNext";
import { useSearchMusic } from "services/http/GET/useSearchMusics";
import { useTopWorldMusic } from "services/http/GET/useTopWorldMusics";
import { useFavoriteMusicsStore } from "store/useFavoriteMusicsStore";
import { usePlayerStore } from "store/usePlayerStore";
import * as S from "./style";

export const Home = () => {
  const { handleCurrentPlaylist, handleSearch, currentPlaylist, search } =
    usePlayerStore();
  const { favoriteMusics } = useFavoriteMusicsStore();
  const isDesktop = useMediaQuery({ minWidth: 960 });
  const {
    data: musicWorldData,
    fetchNextPage,
    hasNextPage,
    isError: isTopError,
    isFetchingNextPage,
    isLoading: isTopLoading,
  } = useTopWorldMusic(20);
  const {
    data: musicSearchData,
    isError: isSearchError,
    isLoading: isSearchLoading,
  } = useSearchMusic({ inputValue: search.inputValue });

  useEffect(() => {
    if (search.inputValue) {
      handleCurrentPlaylist(musicSearchData?.data ?? []);
      return;
    }

    if (search.playlistType === "my_playlist") {
      handleCurrentPlaylist(favoriteMusics);
      return;
    }

    const tracks = musicWorldData?.pages.flatMap((page) => page.tracks.data) ?? [];
    handleCurrentPlaylist(tracks);
  }, [
    favoriteMusics,
    handleCurrentPlaylist,
    musicSearchData?.data,
    musicWorldData?.pages,
    search.inputValue,
    search.playlistType,
  ]);

  const isLoading = search.inputValue
    ? isSearchLoading
    : search.playlistType === "top_100"
      ? isTopLoading
      : false;
  const isError = search.inputValue
    ? isSearchError
    : search.playlistType === "top_100"
      ? isTopError
      : false;
  const title = search.inputValue
    ? `Results for "${search.inputValue}"`
    : search.playlistType === "my_playlist"
      ? "My playlist"
      : "Top 100";
  const description = search.inputValue
    ? "Tracks and artists matching your search."
    : search.playlistType === "my_playlist"
      ? "The tracks you saved for another listen."
      : "The most played tracks around the world, updated by Deezer.";

  return (
    <S.Layout>
      <S.Container>
        <S.Header>
          <S.Logo aria-label="React Music home">
            <span>
              <IoHeadsetSharp />
            </span>
            <strong>React Music</strong>
          </S.Logo>
          <Search />
          <S.HeaderActions>
            <S.PlaylistButton
              type="button"
              $isActive={search.playlistType === "my_playlist"}
              onClick={() =>
                handleSearch({ inputValue: "", playlistType: "my_playlist" })
              }
            >
              <MdPlaylistPlay />
              <span>Playlist</span>
            </S.PlaylistButton>
            <S.FavoriteCount title="Favorite tracks">
              <AiFillHeart />
              <span>{favoriteMusics.length}</span>
            </S.FavoriteCount>
          </S.HeaderActions>
        </S.Header>

        <S.Main>
          {isDesktop && (
            <S.Featured>
              <Player />
              <UpNext />
            </S.Featured>
          )}

          <S.Library id="library">
            <S.LibraryHeader>
              <div>
                <span>Discover</span>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <S.Filters aria-label="Playlist filters">
                <button
                  type="button"
                  className={
                    search.playlistType === "top_100" && !search.inputValue
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    handleSearch({ inputValue: "", playlistType: "top_100" })
                  }
                >
                  Top 100
                </button>
                <button
                  type="button"
                  className={
                    search.playlistType === "my_playlist" && !search.inputValue
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    handleSearch({ inputValue: "", playlistType: "my_playlist" })
                  }
                >
                  My playlist
                  <span>{favoriteMusics.length}</span>
                </button>
              </S.Filters>
            </S.LibraryHeader>

            {isLoading && currentPlaylist.length === 0 ? (
              <S.Status role="status">Loading the collection...</S.Status>
            ) : isError ? (
              <S.Status role="alert">The music collection could not be loaded.</S.Status>
            ) : currentPlaylist.length === 0 ? (
              <S.Status>
                {search.playlistType === "my_playlist" && !search.inputValue
                  ? "Your playlist is empty. Save a track with the heart button."
                  : "No tracks found for this search."}
              </S.Status>
            ) : (
              <S.TrackGrid>
                {currentPlaylist.map((track) => (
                  <MusicItem key={track.id} {...track} />
                ))}
                {search.playlistType === "top_100" &&
                  !search.inputValue &&
                  hasNextPage && (
                    <InfiniteScroll loadMore={() => void fetchNextPage()} />
                  )}
              </S.TrackGrid>
            )}
            {isFetchingNextPage && (
              <S.LoadingMore role="status">Loading more tracks...</S.LoadingMore>
            )}
          </S.Library>
        </S.Main>
      </S.Container>
      {!isDesktop && <MobilePlayer />}
    </S.Layout>
  );
};
