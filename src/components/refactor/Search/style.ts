import styled from "styled-components";

interface IButton {
  isActive: boolean;
}
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme["gap-1"]};
  padding: ${(p) => p.theme["p-md"]} 0;
`;

export const OptionsToSearch = styled.article`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme["gap-2"]};
`;

export const MyPlaylist = styled.button`
  background: inherit;
  margin-left: auto;
  gap: ${(p) => p.theme["gap-1"]};
  align-items: center;

  display: flex;

  border: 1px solid ${(p) => p.theme.colors["purple-800"]};
  border-radius: ${(p) => p.theme["radius-lg"]};

  padding: 0.5rem 1rem;
  color: ${(p) => p.theme.colors["purple-800"]};

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  div {
    display: grid;
    place-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background: ${(p) => p.theme.colors["purple-800"]};
    border-radius: ${(p) => p.theme["radius-full"]};

    span {
      font-size: ${(p) => p.theme["text-base"]};
      color: ${(p) => p.theme.colors.white};
    }
  }
`;

export const Button = styled.button<IButton>`
  background: ${(p) =>
    p.isActive ? p.theme.colors["purple-800"] : p.theme.colors.white};
  padding: ${(p) => p.theme["p-sm"]} ${(p) => p.theme["p-md"]};
  border: 1px solid ${(p) => p.theme.colors["purple-800"]};
  color: ${(p) =>
    p.isActive ? p.theme.colors.white : p.theme.colors["purple-800"]};

  font-size: 1rem;
  border-radius: 2rem;
`;
