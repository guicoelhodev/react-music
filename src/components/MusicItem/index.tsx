import * as React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";
import { useFavoriteMusicsStore } from "../../store/useFavoriteMusicsStore";
import { usePlayerStore } from "../../store/usePlayerStore";
import * as S from "./style";

type IMusicItem = IMusic;

export const MusicItem: React.FC<IMusicItem> = (props) => {
  const { handleCurrentMusic } = usePlayerStore();
  const { favoriteMusics, handleFavoriteMusics } = useFavoriteMusicsStore();

  const isMobile = useMediaQuery({ maxWidth: 580 });
  return (
    <S.Container
      onClick={() => {
        if (isMobile) return handleCurrentMusic(props as IMusic);
      }}
    >
      <S.Player
        src={props.album?.cover_medium!}
        onClick={() => {
          if (!isMobile) return handleCurrentMusic(props as IMusic);
        }}
      />
      <S.ContentMusic
        isFavorite={favoriteMusics.some((i) => i.id === props.id)}
      >
        <div>
          <h4>{props.title}</h4>
          <p>{props.artist?.name}</p>
        </div>

        <button onClick={() => handleFavoriteMusics(props)}>
          <AiFillHeart />
        </button>
      </S.ContentMusic>
    </S.Container>
  );
};
