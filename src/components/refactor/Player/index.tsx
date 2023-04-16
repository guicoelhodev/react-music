import React, { FC } from "react";

import { FaHeadphonesAlt } from "react-icons/fa";
import { usePlayerStorie } from "../../../zustand/usePlayerStorie";

import * as S from "./style";

export const Player: FC = () => {
  const { buttonActions, currentAction } = usePlayerStorie();

  const handleCurrentAction = usePlayerStorie((s) => s.handleCurrentAction);

  console.log(currentAction);

  return (
    <S.Container>
      <S.Header>
        <aside>
          <p>{currentAction !== "pause" ? "Waiting..." : "Now playing..."}</p>
          <FaHeadphonesAlt />
        </aside>

        <section />
        <img src="https://www.vstopbrasil.com.br/wp-content/uploads/just-dance-lady-gaga-ft-colby-odonis-20221811109563985732.jpg" />
      </S.Header>

      <S.PlayerInfo>
        <article>
          <h3>Just Dance</h3>
          <p>Lady Gaga ft. Colby O´Donis Etc </p>
        </article>

        <S.PlayActionsContainer>
          {Object.values(buttonActions).map((item) => (
            <article key={item.action}>
              <S.ButtonAction
                title={item.title}
                size={item.size}
                onClick={() => handleCurrentAction(item.action)}
              >
                {item.icon}
              </S.ButtonAction>
            </article>
          ))}
        </S.PlayActionsContainer>
      </S.PlayerInfo>

      {/* <button onClick={() => console.log(actions)}>Visualizar</button> */}
    </S.Container>
  );
};
