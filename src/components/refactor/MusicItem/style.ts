import styled from "styled-components";

interface IStyledMusic {
  src: string;
}

interface IStyledContent {
  isFavorite: boolean;
}
export const Container = styled.div`
  border-radius: 0.5rem;
  width: 16rem;

  display: flex;
  flex-direction: column;
`;

export const Player = styled.button<IStyledMusic>`
  border-radius: 0.5rem 0.5rem 0 0;
  aspect-ratio: 1/1;
  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;

  border: 1px solid ${(p) => p.theme.colors.white};

  opacity: 0.8;
  cursor: pointer;
`;

export const ContentMusic = styled.section<IStyledContent>`
  width: 100%;
  background: ${(p) => p.theme.colors.white};

  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: calc(16rem - 4rem);
    color: ${(p) => p.theme.colors["purple-800"]};

    p,
    h4 {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    h4 {
      font-size: ${(p) => p.theme["text-lg"]};
      font-weight: 800;
    }
    p {
      font-size: ${(p) => p.theme["text-sm"]};
    }
  }

  button {
    background: inherit;
    border: 1px solid transparent;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;

    svg {
      fill: ${(p) =>
        p.isFavorite
          ? p.theme.colors["purple-800"]
          : p.theme.colors["gray-200"]};
      width: 2rem;
      height: 2rem;
    }
  }
`;
