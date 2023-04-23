import React, { FC, useEffect, useRef } from "react";

import { IActions, IButtonKey } from "zustand/usePlayerStorie/types";
import { usePlayerStorie } from "../../../zustand/usePlayerStorie";

import * as S from "./style";

export const Player: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { buttonActions, currentMusic, currentAction } = usePlayerStorie();

  const { handlePlayMusic, handleSkipMusic } = usePlayerStorie();

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
    info: a,
    prev: () => handleSkipMusic("prev"),
    next: () => handleSkipMusic("next"),
    shuffle: a,
    like: a,
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }

    playAudio();
  }, [audioRef.current, currentAction, currentMusic]);

  return (
    <S.Container>
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
          {getButtonValues().map((item) => (
            <article key={item.action}>
              <S.ButtonAction
                title={item.title}
                size={item.size}
                onClick={() => {
                  const currentAction = handleActions[item.action];
                  currentAction();
                }}
              >
                {item.icon}
              </S.ButtonAction>
            </article>
          ))}
        </S.PlayActionsContainer>
      </S.PlayerInfo>

      {/* <button onClick={() => console.log(actions)}>Visualizar</button> */}
    </S.Container>
  );
};
