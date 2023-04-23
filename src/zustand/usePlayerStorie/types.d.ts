import { IButtonActions } from "components/refactor/Player/types";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";

export type IPlayerStorie = IAttributes & IMethods;

export type IActions = "play" | "prev" | "next" | "info" | "like" | "volume";

export type IMethods = {
  handlePlayMusic: () => void;
  handleCurrentMusic: (music: IMusic) => void;
  handleSkipMusic: (direction: "prev" | "next") => void;
  handleCurrentPlaylist: (musics: IMusic[]) => void;
  handleMusicVolume: () => void;
};

export type IAttributes = {
  buttonActions: IButtonActions;
  currentAction: IActions | null;
  currentMusic: IMusic | null;
  currentPlaylist: IMusic[];
  musicVolume: number;
};

export type IButtonActions = {
  [Key in IActions]: IButtonKey;
};

export type IButtonKey = {
  title: string;
  size: ISize;
  icon: any;
  action: IActions;
};
