import styled from "styled-components";

export const Button = styled.button`
  width: clamp(200px, 40%, 400px);
  height: 50px;
  border: none;
  background-color: var(--orange);
  font-size: 1.3rem;
  border-radius: 12px;
  color: var(--white);
  transition: all 0.8s;
  cursor: pointer;

  :hover {
    background-color: var(--white);
    color: var(--orange);
    border: 1px solid var(--orange);
  }
`;

export const BackButton = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: grid;
  place-items: Center;
  margin-right: 20px;
  margin-left: auto;
  svg {
    width: 40px;
    height: 40px;
  }
`;
