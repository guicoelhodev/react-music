import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { IAttributes, IFavoriteMusicsStore } from "./types";

const initialState: IAttributes = {
  favoriteMusics: [],
};

export const useFavoriteMusicsStore = create<IFavoriteMusicsStore>()(
  persist(
    (set) => ({
      ...initialState,

      handleFavoriteMusics: (music) =>
        set((state) => {
          const alreadyExist = state.favoriteMusics.some(
            (item) => item.id === music.id,
          );
          const favoriteMusics = alreadyExist
            ? state.favoriteMusics.filter((item) => item.id !== music.id)
            : [...state.favoriteMusics, music];

          return { favoriteMusics };
        }),
    }),
    {
      name: "@favorite_musics",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
