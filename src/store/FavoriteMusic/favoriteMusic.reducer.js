export default function favoriteMusicReducer(state = [], action) {
  switch (action.type) {
    case "FAVORITEMUSIC":
      var musicFilter = [];
      let musicas = [...state, ...action.payload];

      console.log(musicFilter);

      musicas.forEach((item) => {
        var duplicated =
          musicFilter.findIndex((redItem) => item.id === redItem.id) > -1;
        if (!duplicated) musicFilter.push(item);
      });

      return musicFilter;

    case "REMOVE":
      return state.filter((musicas) => musicas.id !== action.payload);

    default:
      return state;
  }
}
