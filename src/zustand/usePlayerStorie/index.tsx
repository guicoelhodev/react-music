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
  pause: {
    title: "play music",
    size: "md",
    icon: <BsFillPlayFill />,
    action: "pause",
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
};

export const usePlayerStorie = create<IPlayerStorie>((set) => ({
  ...initialState,
  handleCurrentAction: (action) =>
    set((state) => {
      let { buttonActions, currentAction } = state;
      switch (action) {
        case "pause":
          if (currentAction === action) {
            buttonActions.pause.icon = <BsPlayFill />;

            currentAction = null;
          } else {
            buttonActions.pause.icon = <BsPauseFill />;
            currentAction = "pause";
          }
          return { buttonActions, currentAction };
        default:
          break;
      }
      return state;
    }),
}));
