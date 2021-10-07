import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: var(--light-orange);
  border: 1px solid grey;
  border-radius: 8px;
  color: black;
  font-size: 1rem;
  font-weight: 300;
  padding-left: 8px;

  :focus {
    outline: 1px solid var(--orange);
  }
`;
