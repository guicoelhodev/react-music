import styled, { keyframes } from "styled-components";

interface IDropdownStyle {
  open: boolean;
}

const backdrop = keyframes`
from { backdrop-filter: blur(0); background: rgba(0,0,0,0)}
to { backdrop-filter: blur(4px); background: rgb(0,0,0,0.4)}
`;
export const Container = styled.div`
  position: relative;
  z-index: 1;
`;

export const BlurBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  animation: ${backdrop} 200ms ease-in;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);

  @media (max-width: 600px) {
    animation-duration: 160ms;
  }
`;
export const Dropdown = styled.div<IDropdownStyle>`
  z-index: 2;
  width: 24rem;
  position: fixed;
  top: 0;
  right: 0;

  transform: ${(p) => (p.open ? "translateX(0)" : "translateX(100%)")};
  transition: all 200ms linear;

  background: rgb(142, 33, 223);
  background: linear-gradient(
    180deg,
    rgba(142, 33, 223, 1) 0%,
    rgba(255, 186, 207, 1) 100%
  );
  height: 100%;

  display: flex;
  flex-direction: column;

  .spacing {
    margin: auto;
    padding: 1rem 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    transform: ${(p) => (p.open ? "translateY(0)" : "translateY(100%)")};
  }
`;

export const MenuMusic = styled.div`
  margin-top: 0.5rem;
  background: ${(p) => p.theme.colors.white};
  width: 20rem;
  border: 1px solid ${(p) => p.theme.colors["purple-800"]};

  display: flex;
  border-radius: 5px;

  button {
    background: inherit;
    border: 0;
    padding: 0.5rem;

    :active {
      filter: none;
    }
  }

  button:nth-child(1) {
    border-radius: 5px 0 0 5px;
    background: ${(p) => p.theme.colors.white};
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 3rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }

    article {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      text-align: start;
    }

    p,
    h4 {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${(p) => p.theme.colors["purple-800"]};
      width: 12rem;
    }

    h4 {
      font-size: 1rem;
    }
  }

  button:nth-child(2) {
    width: 3.5rem;
    border-radius: 0 5px 5px 0;

    display: grid;
    place-items: center;

    svg {
      width: 2rem;
      height: 2rem;

      fill: ${(p) => p.theme.colors["purple-800"]};
    }
  }

  button:nth-child(3) {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
  }

  @media (max-width: 600px) {
    width: calc(100% - 3rem);
    max-width: 30rem;
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);

    button:nth-child(1) {
      h4 {
        font-size: 1.2rem;
      }
      img {
        width: 4rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export const HiddenDropdown = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2;

  width: 3rem;
  aspect-ratio: 1/1;

  display: grid;
  place-items: center;
  background: transparent;
  border: 0;

  svg {
    width: 80%;
    height: 80%;
    fill: ${(p) => p.theme.colors.white};
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
