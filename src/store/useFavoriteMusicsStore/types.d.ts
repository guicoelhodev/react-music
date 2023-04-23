import { IMusic } from "services/http/GET/useTopWorldMusics/types";

export type IFavoriteMusicsStore = IAttributes & IMethods;

export type IMethods = {
  handleFavoriteMusics: (music: IMusic) => void;
};

export type IAttributes = {
  favoriteMusics: IMusic[];
};
