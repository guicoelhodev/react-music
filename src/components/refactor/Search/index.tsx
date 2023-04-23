import React from "react";
import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPlaylistPlay } from "react-icons/md";
import * as S from "./style";

export const Search: FC = () => {
  return (
    <S.Container>
      <S.SearchInput>
        <AiOutlineSearch />
        <input type="text" placeholder="search your music here" />
      </S.SearchInput>
      <S.OptionsToSearch>
        <S.Button isActive>Title</S.Button>
        <S.Button isActive={false}>Album</S.Button>
        <S.Button isActive={false}>Artist</S.Button>

        <S.MyPlaylist>
          <MdPlaylistPlay />
          <p>My playlist</p>
          <div>
            <span>8</span>
          </div>
        </S.MyPlaylist>
      </S.OptionsToSearch>
    </S.Container>
  );
};
