import { IMusic } from "services/http/GET/useTopWorldMusics/types";

export type IPlayerStorie = IAttributes & IMethods;
export type IPlaylist = "top_100" | "my_playlist";
export type IRepeatMode = "off" | "all" | "one";

type ISearch = {
  inputValue: string;
  playlistType: IPlaylist;
};

export type IMethods = {
  handlePlayMusic: () => void;
  handleCurrentMusic: (music: IMusic) => void;
  handleSkipMusic: (direction: "prev" | "next") => void;
  handleCurrentPlaylist: (musics: IMusic[]) => void;
  handleMusicVolume: (volume: number) => void;
  handleSearch: (params: Partial<ISearch>) => void;
  handleSeek: (time: number) => void;
  handleProgress: (time: number) => void;
  handleDuration: (duration: number) => void;
  handleLoading: (isLoading: boolean) => void;
  handlePlaybackError: (error: string | null) => void;
  handlePlaybackState: (isPlaying: boolean) => void;
  handleTrackEnd: () => void;
  toggleRepeatMode: () => void;
  toggleShuffle: () => void;
};

export type IAttributes = {
  currentMusic: IMusic | null;
  currentPlaylist: IMusic[];
  musicVolume: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLoading: boolean;
  playbackError: string | null;
  repeatMode: IRepeatMode;
  isShuffled: boolean;
  seekTo: number | null;
  search: ISearch;
};
