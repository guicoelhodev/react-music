import { useEffect, useState } from "react";
import {
  BsChevronDown,
  BsMusicNoteList,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import { usePlayerStore } from "store/usePlayerStore";
import { Player } from "components/Player";
import * as S from "./style";

export const MobilePlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const { currentMusic, currentTime, duration, isPlaying, handlePlayMusic } =
    usePlayerStore();
  const hasCurrentMusic = Boolean(currentMusic);

  useEffect(() => {
    if (isOpen || !hasCurrentMusic) return;

    let animationFrame: number | null = null;
    let lastScrollY = Math.max(window.scrollY, 0);
    let scrollDistance = 0;
    let scrollDirection: "up" | "down" | null = null;

    setIsCompact(lastScrollY > 72);

    const updatePlayerSize = () => {
      animationFrame = null;

      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (currentScrollY <= 24) {
        scrollDirection = null;
        scrollDistance = 0;
        setIsCompact(false);
        return;
      }

      if (Math.abs(delta) < 1) return;

      const nextDirection = delta > 0 ? "down" : "up";

      if (nextDirection !== scrollDirection) {
        scrollDirection = nextDirection;
        scrollDistance = 0;
      }

      scrollDistance += Math.abs(delta);

      if (
        nextDirection === "down" &&
        currentScrollY > 72 &&
        scrollDistance >= 18
      ) {
        setIsCompact(true);
        scrollDistance = 0;
      }

      if (nextDirection === "up" && scrollDistance >= 10) {
        setIsCompact(false);
        scrollDistance = 0;
      }
    };

    const handleScroll = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updatePlayerSize);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [hasCurrentMusic, isOpen]);

  useEffect(() => {
    if (!isOpen || !hasCurrentMusic) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasCurrentMusic, isOpen]);

  if (!currentMusic) return null;

  const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <S.Container>
      <S.MiniPlayer
        $isCompact={isCompact}
        role="region"
        aria-label="Now playing controls"
      >
        <S.Progress $progress={progress} aria-hidden="true" />
        <S.TrackButton
          $isCompact={isCompact}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open now playing"
          aria-expanded={isOpen}
        >
          <img src={currentMusic.album.cover_small} alt="" />
          <span>
            <strong>{currentMusic.title}</strong>
            <small>{currentMusic.artist.name}</small>
          </span>
        </S.TrackButton>
        <S.IconButton
          $isCompact={isCompact}
          type="button"
          onClick={handlePlayMusic}
          aria-label={isPlaying ? "Pause preview" : "Play preview"}
        >
          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
        </S.IconButton>
        <S.IconButton
          $isCompact={isCompact}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open player menu"
          aria-expanded={isOpen}
        >
          <BsMusicNoteList />
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
