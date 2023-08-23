import styled from "styled-components";

interface IButton {
  isActive: boolean;
}
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  .favorite-enabled {
    background: ${(p) => p.theme.colors["blue-aqua-200"]};
    transition: all 200ms ease-in;

    svg,
    p {
      color: ${(p) => p.theme.colors["blue-600"]};
    }
    div {
      background: ${(p) => p.theme.colors["blue-600"]};
      span {
        color: ${(p) => p.theme.colors["blue-aqua-200"]};
      }
    }
  }

  @media (max-width: 580px) {
    padding: 1rem 0;
  }
`;

export const SearchInput = styled.article`
  background: ${(p) => p.theme.colors["blue-700"]};
  border: 2px solid ${(p) => p.theme.colors["blue-aqua-200"]};
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
    color: ${(p) => p.theme.colors["blue-aqua-200"]};
    background-color: inherit;

    ::placeholder {
      color: inherit;
    }

    :focus {
      outline: 0;
    }
  }

  svg {
    fill: ${(p) => p.theme.colors["blue-aqua-200"]};
    width: 1.4rem;
    height: 1.4rem;
  }

  :focus-within {
    border-color: ${(p) => p.theme.colors["blue-aqua-200"]};
    svg {
      fill: ${(p) => p.theme.colors["blue-aqua-200"]};
    }
  }
`;

export const OptionsToSearch = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MyPlaylist = styled.button`
  background: ${(p) => p.theme.colors["blue-600"]};
  margin-left: auto;
  gap: 0.5rem;
  align-items: center;

  display: flex;

  border: 1px solid ${(p) => p.theme.colors["blue-aqua-200"]};
  border-radius: 1.5rem;

  padding: 0.5rem 1rem;
  color: ${(p) => p.theme.colors["blue-aqua-200"]};

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  div {
    display: grid;
    place-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background: ${(p) => p.theme.colors["blue-aqua-200"]};
    border-radius: 50%;

    span {
      font-size: ${(p) => p.theme["text-base"]};
      color: ${(p) => p.theme.colors["blue-600"]};
    }
  }
`;

export const Button = styled.button<IButton>`
  background: ${(p) =>
    p.isActive ? p.theme.colors["blue-aqua-200"] : p.theme.colors["blue-600"]};

  padding: 0.5rem 1rem;

  border: 1px solid ${(p) => p.theme.colors["blue-aqua-200"]};
  color: ${(p) =>
    p.isActive ? p.theme.colors["blue-600"] : p.theme.colors["blue-aqua-200"]};

  font-size: 1rem;
  border-radius: 2rem;

  transition: all 200ms ease-in;
`;
