import * as React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";
import { INullableValues } from "types/generics";
import * as S from "./style";

type IMusicItem = INullableValues<IMusic>;

export const MusicItem: React.FC<IMusicItem> = (props) => {
  return (
    <S.Container>
      <S.Player src={props.album?.cover_small!} />
      <S.ContentMusic isFavorite>
        <div>
          <h4>{props.title} sdhgdsuhduhdsu</h4>
          <p>{props.artist?.name}</p>
        </div>

        <button>
          <AiFillHeart />
        </button>
      </S.ContentMusic>
    </S.Container>
  );
};
