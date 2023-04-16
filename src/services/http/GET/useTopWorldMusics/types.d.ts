export interface IRequiredParams {
  offSet: number;
  limit?: number;
}

export interface IResponse {
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
  tracks: Tracks;
}

export interface ICreator {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}

export interface ITracks {
  data: IMusic[];
  checksum: string;
}

export interface IMusic {
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
  time_add: number;
  artist: Artist;
  album: Album;
  type: string;
}

export interface IArtist {
  id: number;
  name: string;
  link: string;
  tracklist: string;
  type: string;
}

export interface IAlbum {
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
}
