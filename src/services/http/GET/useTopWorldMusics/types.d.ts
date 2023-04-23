import { INullableValues } from "types/generics";

export type IRequiredParams = {
  offSet: number;
  limit?: number;
};

export type IResponse = {
  id: number;
  title: string;
  description: string;
  duration: number;
  public: boolean;
  is_loved_track: boolean;
  collaborative: boolean;
  nb_tracks: number;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  creator: Creator;
  type: string;
  tracks: ITracks;
};

export type ICreator = {
  id: number;
  name: string;
  tracklist: string;
  type: string;
};

export type ITracks = {
  data: IMusic[];
  checksum: string;
};

export type IMusic = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  time_add?: number;
  artist: IArtist;
  album: IAlbum;
  type: string;
};

export type IArtist = {
  id: number;
  name: string;
  link: string;
  tracklist: string;
  type: string;
};

export type IAlbum = {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: string;
};
