import styled from "styled-components";
import { Button } from "design/Button";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  header {
    padding: 10px 0 0 20px;

    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export const LogOut = styled.button`
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: 3px solid var(--orange);
  transition: all 0.4s ease;
  cursor: pointer;
  svg {
    fill: var(--orange);
    width: 80%;
    height: 80%;
  }

  :hover {
    background-color: var(--light-orange);
  }

  @media (max-width: 840px) {
    right: 4px;
    top: 4px;
  }
`;

export const ButtonPage = styled(Button)`
  border: 3px solid transparent;
  border-radius: 0;
  width: 50%;
  background-color: transparent;
  border-bottom: 1px solid red;
  color: var(--black);
  outline-color: transparent;

  :focus,
  :hover {
    border: 3px solid transparent;
    border-bottom: 1px solid var(--orange);
    color: var(--orange);
    background-color: transparent;
    outline-color: transparent;
  }
`;

export const ContainerButtons = styled.aside`
  width: 100%;
  margin: 0 auto;

  ${ButtonPage}:nth-last-child(1) {
    position: relative;
  }
`;

export const CounterMusic = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transform: translateX(-40px);
`;

export const Informations = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  div {
    padding-top: 10px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding-left: 40px;
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 840px) {
    padding: 0;
    justify-content: start;
  }
  @media (max-width: 670px) {
    ${CounterMusic} {
      right: 10px;
      transform: none;
    }
  }
  @media (max-width: 480px) {
    div {
      padding: 0;
    }

    ${ButtonPage} {
      font-size: 1rem;
      text-align: Start;
      padding-left: 10px;
    }
  }

  @media (max-width: 370px) {
    ${ButtonPage} {
      padding: 0;

      ${CounterMusic} {
        right: 0;
      }
    }
  }
`;
