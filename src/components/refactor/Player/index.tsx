import React, { FC } from "react";

import { AiFillHeart } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsFillPauseFill, BsThreeDots, BsShuffle } from "react-icons/bs";

import { BiSkipPrevious } from "react-icons/bi";
import { IButtonActions } from "./types";
import * as S from "./style";

const buttonActions: IButtonActions = {
  prev: {
    title: "previous music",
    size: "sm",
    icon: <BiSkipPrevious />,
  },
  play: {
    title: "play music",
    size: "md",
    icon: <BsFillPauseFill />,
  },

  next: {
    title: "next music",
    size: "sm",
    icon: <BiSkipPrevious />,
  },
  info: {
    title: "more info",
    size: "sm",
    icon: <BsThreeDots />,
  },
  like: {
    title: "like music",
    size: "sm",
    icon: <AiFillHeart />,
  },
  shuffle: {
    title: "shuffle playlist",
    size: "sm",
    icon: <BsShuffle />,
  },
};

export const Player: FC = () => {
  return (
    <S.Container>
      <S.Header>
        <aside>
          <p>Now playing...</p>
          <FaHeadphonesAlt />
        </aside>

        <section />
        <img src="https://www.vstopbrasil.com.br/wp-content/uploads/just-dance-lady-gaga-ft-colby-odonis-20221811109563985732.jpg" />
      </S.Header>

      <S.PlayerInfo>
        <article>
          <h3>Just Dance</h3>
          <p>Lady Gaga ft. Colby O´Donis Etc </p>
        </article>

        <S.PlayActionsContainer>
          {Object.values(buttonActions).map((item) => (
            <article>
              <S.ButtonAction title={item.title} size={item.size}>
                {item.icon}
              </S.ButtonAction>
            </article>
          ))}
        </S.PlayActionsContainer>
      </S.PlayerInfo>
    </S.Container>
  );
};
