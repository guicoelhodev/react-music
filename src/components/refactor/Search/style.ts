import styled from "styled-components";

interface IButton {
  isActive: boolean;
}
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  background: ${(p) => p.theme.colors.white};
`;

export const SearchInput = styled.article`
  border: 2px solid ${(p) => p.theme.colors["gray-200"]};
  border-radius: 5rem;

  display: flex;
  align-items: center;
  padding: 0 1rem;

  input {
    padding: 0.8rem;
    flex: 1;
    border-radius: inherit;
    border: 0;
    font-size: 1rem;
    color: ${(p) => p.theme.colors["purple-800"]};

    ::placeholder {
      color: #9c9c9c;
    }

    :focus {
      outline: 0;
    }
  }

  svg {
    fill: #999;
    width: 1.4rem;
    height: 1.4rem;
  }

  :focus-within {
    border-color: ${(p) => p.theme.colors["purple-800"]};
    svg {
      fill: ${(p) => p.theme.colors["purple-800"]};
    }
  }
`;

export const OptionsToSearch = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MyPlaylist = styled.button`
  background: inherit;
  margin-left: auto;
  gap: 0.5rem;
  align-items: center;

  display: flex;

  border: 1px solid ${(p) => p.theme.colors["purple-800"]};
  border-radius: 1.5rem;

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
    border-radius: 50%;

    span {
      font-size: ${(p) => p.theme["text-base"]};
      color: ${(p) => p.theme.colors.white};
    }
  }
`;

export const Button = styled.button<IButton>`
  background: ${(p) =>
    p.isActive ? p.theme.colors["purple-800"] : p.theme.colors.white};

  padding: 0.5rem 1rem;

  border: 1px solid ${(p) => p.theme.colors["purple-800"]};
  color: ${(p) =>
    p.isActive ? p.theme.colors.white : p.theme.colors["purple-800"]};

  font-size: 1rem;
  border-radius: 2rem;
`;
