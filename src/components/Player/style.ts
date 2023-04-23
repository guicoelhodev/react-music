import styled from "styled-components";

import { ISize } from "./types";

type IButton = {
  size: ISize;
  iconColor: string;
};

const buttonSize: { [Key in ISize]: string } = {
  md: "5rem",
  sm: "3rem",
};

export const Container = styled.div`
  width: min(100%, 21.25rem);
  height: min(100%, 48rem);
  overflow-y: auto;

  border-radius: ${(p) => p.theme["radius-lg"]};
  padding: 2rem 1rem;

  background: rgb(142, 33, 223);
  background: linear-gradient(
    180deg,
    rgba(142, 33, 223, 1) 0%,
    rgba(255, 186, 207, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  background: rgba(255, 255, 255, 0.3);

  padding: 1rem;
  border-radius: 1.5rem;

  aside {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg,
    p {
      color: #fff;
    }

    p {
      font-weight: 600;
      font-size: ${(p) => p.theme["text-xl"]};
    }
  }

  img {
    aspect-ratio: 1/1;
    width: 16rem;
    background: transparent;
    border-radius: 1rem;
  }
`;

export const PlayerInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(p) => p.theme.colors.white};

    h3 {
      font-weight: 800;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 16rem;
      text-align: center;
    }
    p {
      padding-top: ${(p) => p.theme["p-sm"]};
      max-width: 14rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const PlayActionsContainer = styled.div`
  width: 14rem;
  padding: ${(p) => p.theme["p-md"]} 0;

  padding-top: 3rem;
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 0.6fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  article {
    display: grid;
    place-items: center;
  }

  article:nth-child(2) {
    transform: translateY(-10px);

    svg {
      width: 3.4rem;
      height: 3.4em;
    }
  }

  article:nth-child(1),
  article:nth-child(3) {
    svg {
      width: 3rem;
      height: 3em;
    }
  }

  article:nth-child(3) {
    transform: rotate(180deg);
  }
`;

export const ButtonAction = styled.button<IButton>`
  width: ${(p) => buttonSize[p.size]};

  transition: all 200ms ease-in;
  background: rgba(255, 255, 255, 0.3);

  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid transparent;

  display: grid;
  place-items: center;
  outline: 1px solid transparent;

  svg {
    transition: all 200ms ease-in;
    fill: ${(p) => p.iconColor};
    width: 1.6rem;
    height: 1.6rem;
  }

  :hover {
    background: rgba(255, 255, 255, 0.5);
  }

  :active,
  :focus {
    outline: 1px solid ${(p) => p.theme.colors["pink-200"]};
  }

  :active {
    background: ${(p) => p.theme.colors["pink-200"]};
  }
`;
