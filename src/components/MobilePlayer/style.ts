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
`;
export const Dropdown = styled.div<IDropdownStyle>`
  z-index: 2;
  width: 24rem;
  position: fixed;
  top: 0;
  right: 0;

  transform: ${(p) => (p.open ? "translateX(0)" : "translate(100%)")};
  transition: all 200ms linear;
  background: whitesmoke;

  height: 100%;

  display: flex;
  flex-direction: column;

  .spacing {
    margin: auto;
    padding: 1rem 2rem;
  }
`;

export const HiddenDropdown = styled.button`
  height: 4rem;
  background: inherit;
  border: 1px solid transparent;

  display: flex;
  padding: 1rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  :active {
    filter: none;
  }
`;
