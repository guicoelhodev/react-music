import * as React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";
import { INullableValues } from "types/generics";
import { usePlayerStorie } from "../../../zustand/usePlayerStorie";
import * as S from "./style";

type IMusicItem = INullableValues<IMusic>;

export const MusicItem: React.FC<IMusicItem> = (props) => {
  const { handleCurrentMusic } = usePlayerStorie();
  return (
    <S.Container>
      <S.Player
        src={props.album?.cover_medium!}
        onClick={() => handleCurrentMusic(props as IMusic)}
      />
      <S.ContentMusic isFavorite>
        <div>
          <h4>{props.title}</h4>
          <p>{props.artist?.name}</p>
        </div>

        <button>
          <AiFillHeart />
        </button>
      </S.ContentMusic>
    </S.Container>
  );
};
