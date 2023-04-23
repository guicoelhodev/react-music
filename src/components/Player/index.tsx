import React, { FC, useEffect, useRef } from "react";
import { useFavoriteMusicsStore } from "../../store/useFavoriteMusicsStore";

import { IActions, IButtonKey } from "../../store/usePlayerStore/types";
import { usePlayerStore } from "../../store/usePlayerStore";

import * as S from "./style";

interface IPlayer {
  bgTransparent?: boolean;
}

export const Player: FC<IPlayer> = ({ bgTransparent = false }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { buttonActions, currentMusic, currentAction } = usePlayerStore();

  const { handlePlayMusic, handleSkipMusic, handleMusicVolume, musicVolume } =
    usePlayerStore();

  const { handleFavoriteMusics, favoriteMusics } = useFavoriteMusicsStore();

  const getButtonValues: () => IButtonKey[] = () =>
    Object.values(buttonActions);

  const playAudio = () => {
    const audio = audioRef.current;

    if (currentAction === "play") {
      audio?.play();
    } else {
      audio?.pause();
    }
  };

  const a = () => {};

  const handleActions: { [Key in IActions] } = {
    play: () => handlePlayMusic(),
    prev: () => handleSkipMusic("prev"),
    next: () => handleSkipMusic("next"),
    volume: () => handleMusicVolume(),
    like: () => handleFavoriteMusics(currentMusic!),
    info: a,
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = musicVolume;
    }

    playAudio();
  }, [audioRef.current, currentAction, currentMusic, musicVolume]);

  return (
    <S.Container isTransparent={bgTransparent}>
      <S.Header>
        <img src={currentMusic?.album.cover_medium} />
      </S.Header>

      <audio ref={audioRef} src={currentMusic?.preview}></audio>
      <S.PlayerInfo>
        <article>
          <h3>{currentMusic ? currentMusic.title : "XXXXX XXXX"}</h3>

          <p>{currentMusic ? currentMusic.artist.name : "XXXXX XXXX"}</p>
        </article>

        <S.PlayActionsContainer>
          {getButtonValues().map((item) => {
            let iconColor = "#fff";
            if (
              item.action === "like" &&
              favoriteMusics.some((music) => music.id === currentMusic?.id)
            ) {
              iconColor = "#ee88a6";
            }

            return (
              <article key={item.action}>
                <S.ButtonAction
                  title={item.title}
                  size={item.size}
                  iconColor={iconColor}
                  onClick={() => {
                    const currentAction = handleActions[item.action];
                    currentAction();
                  }}
                >
                  {item.icon}
                </S.ButtonAction>
              </article>
            );
          })}
        </S.PlayActionsContainer>
      </S.PlayerInfo>
    </S.Container>
  );
};
