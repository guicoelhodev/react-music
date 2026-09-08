import { AiFillHeart } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";
import { useFavoriteMusicsStore } from "store/useFavoriteMusicsStore";
import { usePlayerStore } from "store/usePlayerStore";
import * as S from "./style";

export const MusicItem = (music: IMusic) => {
  const { currentMusic, isPlaying, handleCurrentMusic, handlePlayMusic } =
    usePlayerStore();
  const { favoriteMusics, handleFavoriteMusics } = useFavoriteMusicsStore();
  const isCurrent = currentMusic?.id === music.id;
  const isFavorite = favoriteMusics.some((item) => item.id === music.id);

  const handleSelect = () => {
    if (isCurrent) handlePlayMusic();
    else handleCurrentMusic(music);
  };

  return (
    <S.Container $isCurrent={isCurrent}>
      <S.CoverButton
        type="button"
        onClick={handleSelect}
        aria-label={`${isCurrent && isPlaying ? "Pause" : "Play"} ${music.title} by ${music.artist.name}`}
      >
        <img src={music.album.cover_medium} alt="" />
        <span>{isCurrent && isPlaying ? <BsPauseFill /> : <BsPlayFill />}</span>
      </S.CoverButton>

      <S.ContentMusic>
        <S.TrackButton type="button" onClick={handleSelect}>
          <strong>{music.title}</strong>
          <span>{music.artist.name}</span>
        </S.TrackButton>
        <S.FavoriteButton
          type="button"
          $isFavorite={isFavorite}
          onClick={() => handleFavoriteMusics(music)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
        >
          <AiFillHeart />
        </S.FavoriteButton>
      </S.ContentMusic>
    </S.Container>
  );
};
