import { FC } from "react";
import { DebounceInput } from "react-debounce-input";
import { AiOutlineSearch } from "react-icons/ai";
import { usePlayerStore } from "store/usePlayerStore";
import * as S from "./style";

export const Search: FC = () => {
  const { search, handleSearch } = usePlayerStore();

  return (
    <S.SearchInput>
      <AiOutlineSearch aria-hidden="true" />
      <DebounceInput
        debounceTimeout={400}
        type="search"
        aria-label="Search music"
        onChange={(event) => handleSearch({ inputValue: event.target.value })}
        placeholder="Search artists, tracks, albums..."
        value={search.inputValue}
      />
    </S.SearchInput>
  );
};
