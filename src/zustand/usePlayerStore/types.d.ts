import { IButtonActions } from "components/refactor/Player/types";
import { IconType } from "react-icons";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";

export type IPlayerStorie = IAttributes & IMethods;

export type IActions = "play" | "prev" | "next" | "info" | "like" | "volume";
export type IPlaylist = "top_100" | "my_playlist";

type ISearch = {
  inputValue: string;
  playlistType: IPlaylist;
};

export type IMethods = {
  handlePlayMusic: () => void;
  handleCurrentMusic: (music: IMusic) => void;
  handleSkipMusic: (direction: "prev" | "next") => void;
  handleCurrentPlaylist: (musics: IMusic[]) => void;
  handleMusicVolume: () => void;
  handleSearch: (params: Partial<ISearch>) => void;
};

export type IAttributes = {
  buttonActions: IButtonActions;
  currentAction: IActions | null;
  currentMusic: IMusic | null;
  currentPlaylist: IMusic[];
  musicVolume: number;
  search: ISearch;
};

export type IButtonActions = {
  [Key in IActions]: IButtonKey;
};

export type IButtonKey = {
  title: string;
  size: ISize;
  icon: Element<IconType>;
  action: IActions;
};
