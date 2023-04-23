import React, { useState } from "react";
import { FC } from "react";
import { DebounceInput } from "react-debounce-input";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPlaylistPlay } from "react-icons/md";
import { usePlayerStore } from "../../zustand/usePlayerStore";
import { useFavoriteMusicsStore } from "../../zustand/useFavoriteMusicsStore";
import * as S from "./style";

export type IPlaylistType = "top 100" | "favorite";

export const Search: FC = () => {
  const { favoriteMusics } = useFavoriteMusicsStore();
  const { search, handleSearch } = usePlayerStore();

  return (
    <S.Container>
      <S.SearchInput>
        <AiOutlineSearch />
        <DebounceInput
          debounceTimeout={400}
          type="text"
          onChange={(e) => handleSearch({ inputValue: e.target.value })}
          placeholder="search your music here"
          value={search.inputValue}
        />
      </S.SearchInput>

      <S.OptionsToSearch>
        <S.Button
          isActive={search.playlistType === "top_100"}
          onClick={() => {
            handleSearch({ playlistType: "top_100" });
          }}
        >
          Top 100
        </S.Button>

        <S.MyPlaylist
          className={
            search.playlistType === "my_playlist" ? "favorite-enabled" : ""
          }
          onClick={() => {
            handleSearch({ playlistType: "my_playlist" });
          }}
        >
          <MdPlaylistPlay />
          <p>My playlist</p>
          <div>
            <span>{favoriteMusics.length}</span>
          </div>
        </S.MyPlaylist>
      </S.OptionsToSearch>
    </S.Container>
  );
};
