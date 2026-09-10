import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 50;
`;

export const MiniPlayer = styled.div`
  position: fixed;
  z-index: 52;
  right: 1rem;
  bottom: calc(1rem + env(safe-area-inset-bottom));
  left: 1rem;
  display: flex;
  align-items: center;
  max-width: 34rem;
  min-height: 4.5rem;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors["blue-500"]};
  border-radius: 1rem;
  background: rgba(6, 17, 37, 0.94);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);
`;

export const Progress = styled.span<{ $progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $progress }) => `${$progress}%`};
  height: 2px;
  background: ${({ theme }) => theme.colors["cyan-400"]};
  transition: width 200ms linear;
`;

export const TrackButton = styled.button`
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem;
  border: 0;
  text-align: left;
  background: transparent;

  img {
    width: 3.25rem;
    height: 3.25rem;
    object-fit: cover;
    border-radius: 0.65rem;
  }

  span {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 0.2rem;
  }

  strong,
  small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.82rem;
  }

  small {
    color: ${({ theme }) => theme.colors["gray-400"]};
    font-size: 0.7rem;
  }
`;

export const IconButton = styled.button`
  display: grid;
  flex: 0 0 2.75rem;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 0.25rem;
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`;

export const Backdrop = styled.button`
  position: fixed;
  z-index: 53;
  inset: 0;
  width: 100%;
  border: 0;
  background: rgba(0, 4, 12, 0.72);
  backdrop-filter: blur(5px);
`;

export const Panel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 54;
  inset: 0;
  display: flex;
  height: 100dvh;
  max-height: 100dvh;
  flex-direction: column;
  overflow: hidden;
  overscroll-behavior: none;
  background: ${({ theme }) => theme.colors["blue-900"]};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(100%)"};
  transition: opacity 180ms ease, transform 220ms ease, visibility 220ms;

  > section {
    display: flex;
    min-height: 0;
    flex: 1;
    flex-direction: column;
    border: 0;
    border-radius: 0;
    box-shadow: none;

    > div {
      display: flex;
      min-height: 0;
      flex: 1;
      flex-direction: column;
      padding-bottom: calc(1.25rem + env(safe-area-inset-bottom));
    }
  }
`;

export const PanelHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 42rem;
  margin: 0 auto;
  padding: calc(1rem + env(safe-area-inset-top)) 1rem 1rem;

  span {
    color: ${({ theme }) => theme.colors["gray-300"]};
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  button {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid ${({ theme }) => theme.colors["blue-600"]};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors["blue-800"]};

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;
