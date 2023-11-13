type Music = {
  id: number;
  title: string;
  artist: Artist;
  album: Album;
  year: number;
  genre: string;
  duration: number;
  cover: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;
};

type Playlist = {
  id: number;
  name: string;
  cover: string;
  musics: Music[];
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  playlists: Playlist[];
  createdAt: Date;
  updatedAt: Date;
};

type Artist = {
  id: number;
  name: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
};

type Album = {
  id: number;
  name: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
};

export type { Music, Playlist, User, Artist, Album };
