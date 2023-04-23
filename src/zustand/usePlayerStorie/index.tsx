import React from "react";
import { create } from "zustand";
import { IAttributes, IPlayerStorie, IButtonActions } from "./types";

import {
  BsThreeDots,
  BsShuffle,
  BsFillPlayFill,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import { BiSkipPrevious } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const buttonActions: IButtonActions = {
  prev: {
    title: "previous music",
    size: "sm",
    icon: <BiSkipPrevious />,
    action: "prev",
  },
  play: {
    title: "play music",
    size: "md",
    icon: <BsFillPlayFill />,
    action: "play",
  },

  next: {
    title: "next music",
    size: "sm",
    icon: <BiSkipPrevious />,
    action: "next",
  },
  info: {
    title: "more info",
    size: "sm",
    icon: <BsThreeDots />,
    action: "info",
  },
  like: {
    title: "like music",
    size: "sm",
    icon: <AiFillHeart />,
    action: "like",
  },
  shuffle: {
    title: "shuffle playlist",
    size: "sm",
    icon: <BsShuffle />,
    action: "shuffle",
  },
};

const initialState: IAttributes = {
  buttonActions,
  currentAction: null,
  currentMusic: null,
  currentPlaylist: [],
};

export const usePlayerStorie = create<IPlayerStorie>((set) => ({
  ...initialState,

  handleCurrentPlaylist: (tracks) => set({ currentPlaylist: tracks }),

  handleCurrentMusic: (music) => set({ currentMusic: music }),

  handlePlayMusic: () =>
    set((state) => {
      let { buttonActions, currentAction } = state;
      if (currentAction === "play") {
        buttonActions.play.icon = <BsPlayFill />;

        currentAction = null;
      } else {
        buttonActions.play.icon = <BsPauseFill />;
        currentAction = "play";
      }
      return { buttonActions, currentAction };
    }),
}));
