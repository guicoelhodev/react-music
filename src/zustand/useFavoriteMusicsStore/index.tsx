import { create } from "zustand";
import { IAttributes, IFavoriteMusicsStore } from "./types";

const initialState: IAttributes = {
  favoriteMusics: [],
};

export const useFavoriteMusicsStore = create<IFavoriteMusicsStore>((set) => ({
  ...initialState,

  handleFavoriteMusics: (music) =>
    set((state) => {
      let { favoriteMusics } = state;

      const alreadyExist = favoriteMusics.some((i) => i.id === music.id);

      if (!alreadyExist) {
        favoriteMusics.push(music);
      } else {
        favoriteMusics = favoriteMusics.filter((i) => i.id !== music.id);
      }

      return { ...state, favoriteMusics };
    }),
}));
