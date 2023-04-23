import React, { useState } from "react";
import { BsChevronDown, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "store/usePlayerStore";
import { Player } from "../Player";
import * as S from "./style";

export const MobilePlayer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentMusic, currentAction, handlePlayMusic } = usePlayerStore();
  return (
    <S.Container>
      {currentMusic && (
        <S.MenuMusic>
          <button onClick={() => setIsDropdownOpen((prev) => !prev)}>
            <img src={currentMusic?.album.cover_medium} alt="music item" />
            <article>
              <h4>{currentMusic?.title}</h4>
              <p>{currentMusic?.artist.name}</p>
            </article>
          </button>

          <button onClick={handlePlayMusic}>
            {currentAction === "play" ? <BsPauseFill /> : <BsPlayFill />}
          </button>

          <button>sdsd</button>
        </S.MenuMusic>
      )}

      <S.Dropdown open={isDropdownOpen}>
        <div className="spacing">
          <Player bgTransparent />
        </div>
      </S.Dropdown>

      {isDropdownOpen && (
        <>
          <S.BlurBackground
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          />

          <S.HiddenDropdown onClick={() => setIsDropdownOpen((prev) => !prev)}>
            <BsChevronDown />
          </S.HiddenDropdown>
        </>
      )}
    </S.Container>
  );
};
