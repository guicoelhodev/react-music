import { create } from "zustand";
import { IAttributes, IPlayerStorie } from "./types";

const initialState: IAttributes = {
  musicVolume: 0.35,
  currentMusic: null,
  currentPlaylist: [],
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  isLoading: false,
  playbackError: null,
  repeatMode: "off",
  isShuffled: false,
  seekTo: null,
  search: {
    inputValue: "",
    playlistType: "top_100",
  },
};

const getNextIndex = (
  currentIndex: number,
  playlistLength: number,
  isShuffled: boolean,
) => {
  if (!isShuffled || playlistLength < 2) return currentIndex + 1;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * playlistLength);
  }
  return nextIndex;
};

export const usePlayerStore = create<IPlayerStorie>((set) => ({
  ...initialState,

  handleCurrentPlaylist: (currentPlaylist) => set({ currentPlaylist }),

  handleCurrentMusic: (currentMusic) =>
    set({
      currentMusic,
      currentTime: 0,
      duration: 0,
      isPlaying: true,
      isLoading: true,
      playbackError: null,
      seekTo: null,
    }),

  handleMusicVolume: (musicVolume) => set({ musicVolume }),

  handleSkipMusic: (direction) =>
    set((state) => {
      if (!state.currentMusic || state.currentPlaylist.length === 0) return {};

      const currentIndex = state.currentPlaylist.findIndex(
        (music) => music.id === state.currentMusic?.id,
      );
      if (currentIndex < 0) return {};

      const nextIndex =
        direction === "prev"
          ? currentIndex - 1
          : getNextIndex(
              currentIndex,
              state.currentPlaylist.length,
              state.isShuffled,
            );

      if (nextIndex < 0 || nextIndex >= state.currentPlaylist.length) return {};

      return {
        currentMusic: state.currentPlaylist[nextIndex],
        currentTime: 0,
        duration: 0,
        isPlaying: true,
        isLoading: true,
        playbackError: null,
        seekTo: null,
      };
    }),

  handlePlayMusic: () =>
    set((state) =>
      state.currentMusic
        ? { isPlaying: !state.isPlaying, playbackError: null }
        : {},
    ),

  handleSearch: ({ inputValue, playlistType }) =>
    set((state) => ({
      search: {
        inputValue: inputValue ?? state.search.inputValue,
        playlistType: playlistType ?? state.search.playlistType,
      },
    })),

  handleSeek: (seekTo) => set({ seekTo, currentTime: seekTo }),
  handleProgress: (currentTime) => set({ currentTime, seekTo: null }),
  handleDuration: (duration) => set({ duration }),
  handleLoading: (isLoading) => set({ isLoading }),
  handlePlaybackError: (playbackError) =>
    set(
      playbackError
        ? { playbackError, isLoading: false, isPlaying: false }
        : { playbackError: null },
    ),
  handlePlaybackState: (isPlaying) => set({ isPlaying }),

  handleTrackEnd: () =>
    set((state) => {
      if (!state.currentMusic || state.currentPlaylist.length === 0) {
        return { isPlaying: false, currentTime: state.duration };
      }

      if (state.repeatMode === "one") {
        return { currentTime: 0, seekTo: 0, isPlaying: true };
      }

      const currentIndex = state.currentPlaylist.findIndex(
        (music) => music.id === state.currentMusic?.id,
      );
      let nextIndex = getNextIndex(
        currentIndex,
        state.currentPlaylist.length,
        state.isShuffled,
      );

      if (nextIndex >= state.currentPlaylist.length) {
        if (state.repeatMode !== "all") {
          return { isPlaying: false, currentTime: state.duration };
        }
        nextIndex = 0;
      }

      return {
        currentMusic: state.currentPlaylist[nextIndex],
        currentTime: 0,
        duration: 0,
        isPlaying: true,
        isLoading: true,
        playbackError: null,
        seekTo: null,
      };
    }),

  toggleRepeatMode: () =>
    set((state) => ({
      repeatMode:
        state.repeatMode === "off"
          ? "all"
          : state.repeatMode === "all"
            ? "one"
            : "off",
    })),
  toggleShuffle: () => set((state) => ({ isShuffled: !state.isShuffled })),
}));
