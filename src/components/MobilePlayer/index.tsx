import { useState } from "react";
import {
  BsArrowsAngleExpand,
  BsChevronDown,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import { usePlayerStore } from "store/usePlayerStore";
import { Player } from "components/Player";
import * as S from "./style";

export const MobilePlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentMusic, currentTime, duration, isPlaying, handlePlayMusic } =
    usePlayerStore();

  if (!currentMusic) return null;

  const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <S.Container>
      <S.MiniPlayer>
        <S.Progress $progress={progress} />
        <S.TrackButton
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open now playing"
        >
          <img src={currentMusic.album.cover_small} alt="" />
          <span>
            <strong>{currentMusic.title}</strong>
            <small>{currentMusic.artist.name}</small>
          </span>
        </S.TrackButton>
        <S.IconButton
          type="button"
          onClick={handlePlayMusic}
          aria-label={isPlaying ? "Pause preview" : "Play preview"}
        >
          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
        </S.IconButton>
        <S.IconButton
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Expand player"
        >
          <BsArrowsAngleExpand />
        </S.IconButton>
      </S.MiniPlayer>

      {isOpen && <S.Backdrop onClick={() => setIsOpen(false)} />}
      <S.Panel $isOpen={isOpen} aria-hidden={!isOpen}>
        <S.PanelHeader>
          <span>Now playing</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close player"
          >
            <BsChevronDown />
          </button>
        </S.PanelHeader>
        <Player bgTransparent />
      </S.Panel>
    </S.Container>
  );
};
