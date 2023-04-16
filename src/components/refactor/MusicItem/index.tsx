import * as React from "react";
import { IMusic } from "services/http/GET/useTopWorldMusics/types";
import * as S from "./style";

interface IMusicItem extends IMusic {}

export const MusicItem: React.FC<IMusicItem> = (props) => {
  console.log("thats the props", props.preview);
  return <S.Container>jshdjdhkdjh</S.Container>;
};
