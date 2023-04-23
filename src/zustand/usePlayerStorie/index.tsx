import React from "react";
import { create } from "zustand";
import { IAttributes, IPlayerStorie, IButtonActions } from "./types";

import {
  BsThreeDots,
  BsFillPlayFill,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";

import { GiSpeaker } from "react-icons/gi";
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
  volume: {
    title: "Change volume high",
    size: "sm",
    icon: <GiSpeaker />,
    action: "volume",
  },
};

const initialState: IAttributes = {
  buttonActions,
  musicVolume: 0.1,
  currentAction: null,
  currentMusic: null,
  currentPlaylist: [],
};

export const usePlayerStorie = create<IPlayerStorie>((set) => ({
  ...initialState,

  handleCurrentPlaylist: (tracks) => set({ currentPlaylist: tracks }),

  handleCurrentMusic: (music) => set({ currentMusic: music }),

  handleMusicVolume: () =>
    set((state) => {
      let { musicVolume } = state;

      if (musicVolume === 0.1) musicVolume = 0.6;
      else if (musicVolume === 0) musicVolume = 0.1;
      else musicVolume = 0;

      return { ...state, musicVolume };
    }),

  handleSkipMusic: (direction) =>
    set((state) => {
      if (!state.currentMusic) return state;

      let currentMusicIndex: number = 0;

      state.currentPlaylist.forEach((music, index) => {
        if (state.currentMusic?.id !== music.id) return;
        return (currentMusicIndex = index);
      });

      if (direction === "prev") {
        currentMusicIndex -= 1;
      } else {
        currentMusicIndex += 1;
      }

      if (
        currentMusicIndex < 0 ||
        currentMusicIndex === state.currentPlaylist.length
      ) {
        return state;
      }

      return {
        ...state,
        currentMusic: state.currentPlaylist[currentMusicIndex],
      };
    }),

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
