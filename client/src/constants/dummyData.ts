import { Music, Playlist, Artist, Album } from "../types/types";

const dummyArtists: Artist[] = [
  {
    id: 1,
    name: "The Weekend",
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Adele",
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Yohanna",
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const dummyAlbums: Album[] = [
  {
    id: 1,
    name: "After Hours",
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "25",
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Ereft",
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const dummyMusics: Music[] = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: dummyArtists[0],
    album: dummyAlbums[0],
    year: 2020,
    genre: "Pop",
    duration: 200,
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg",
    file: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Hello",
    artist: dummyArtists[1],
    album: dummyAlbums[1],
    year: 2015,
    genre: "Pop",
    duration: 200,
    cover:
      "https://www.slate.com/content/dam/slate/blogs/browbeat/2011/09/29/hugo_chavez_caption_contest/Adele-Hello-video.jpg.CROP.promo-xlarge2.jpg",
    file: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Esat ena Weha",
    artist: dummyArtists[2],
    album: dummyAlbums[2],
    year: 2019,
    genre: "Pop",
    duration: 200,
    cover:
      "https://lastfm.freetls.fastly.net/i/u/ar0/0944e94d065482c0baa3f06090845e49.jpg",
    file: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const dummyPlaylists: Playlist[] = [
  {
    id: 1,
    name: "My Playlist",
    cover: "",
    musics: [dummyMusics[0], dummyMusics[1]],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "My Playlist 2",
    cover: "",
    musics: [dummyMusics[2]],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export { dummyArtists, dummyAlbums, dummyMusics, dummyPlaylists };
