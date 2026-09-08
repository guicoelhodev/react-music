import styled from "styled-components";

export const SearchInput = styled.label`
  display: flex;
  align-items: center;
  width: min(100%, 38rem);
  min-height: 3rem;
  padding: 0 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors["blue-600"]};
  border-radius: 0.9rem;
  background: ${({ theme }) => theme.colors["blue-800"]};
  transition: border-color 160ms ease, box-shadow 160ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors["blue-500"]};
    box-shadow: 0 0 0 3px rgba(32, 217, 238, 0.08);
  }

  > svg {
    flex: 0 0 auto;
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.colors["gray-400"]};
  }

  input {
    min-width: 0;
    flex: 1;
    padding: 0.75rem;
    border: 0;
    outline: 0;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    font-size: 0.85rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["gray-500"]};
    }

    &::-webkit-search-cancel-button {
      filter: invert(1);
    }
  }

`;
