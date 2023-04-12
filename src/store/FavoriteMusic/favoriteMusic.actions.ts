export function getFavoriteMusic(
  title,
  artist,
  duration,
  image,
  link,
  audio,
  id
) {
  return {
    type: "FAVORITEMUSIC",
    payload: [{ title, artist, duration, image, link, audio, id }],
  };
}

export function removeItem(id) {
  return {
    type: "REMOVE",
    payload: id,
  };
}
