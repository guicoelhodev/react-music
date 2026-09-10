import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 50;
`;

export const MiniPlayer = styled.div<{ $isCompact: boolean }>`
  position: fixed;
  z-index: 52;
  bottom: calc(
    ${({ $isCompact }) => ($isCompact ? "0.6rem" : "1rem")} +
      env(safe-area-inset-bottom)
  );
  left: 50%;
  display: flex;
  align-items: center;
  width: calc(100% - ${({ $isCompact }) => ($isCompact ? "7rem" : "2rem")});
  max-width: ${({ $isCompact }) => ($isCompact ? "20rem" : "34rem")};
  height: ${({ $isCompact }) => ($isCompact ? "3rem" : "4.5rem")};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors["blue-500"]};
  border-radius: ${({ $isCompact }) => ($isCompact ? "1.5rem" : "1rem")};
  background: rgba(6, 17, 37, 0.94);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transform: translateX(-50%);
  transition:
    width 420ms cubic-bezier(0.32, 0.72, 0, 1),
    max-width 420ms cubic-bezier(0.32, 0.72, 0, 1),
    height 420ms cubic-bezier(0.32, 0.72, 0, 1),
    bottom 420ms cubic-bezier(0.32, 0.72, 0, 1),
    border-radius 420ms cubic-bezier(0.32, 0.72, 0, 1);
  will-change: width, height;
`;

export const Progress = styled.span<{ $progress: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ $progress }) => `${$progress}%`};
  height: 2px;
  background: ${({ theme }) => theme.colors["cyan-400"]};
  box-shadow: 0 0 10px rgba(32, 217, 238, 0.7);
  transition: width 200ms linear;
`;

export const TrackButton = styled.button<{ $isCompact: boolean }>`
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  align-self: stretch;
  gap: ${({ $isCompact }) => ($isCompact ? "0.5rem" : "0.75rem")};
  padding: ${({ $isCompact }) => ($isCompact ? "0.35rem" : "0.55rem")};
  border: 0;
  text-align: left;
  background: transparent;
  transition:
    gap 420ms cubic-bezier(0.32, 0.72, 0, 1),
    padding 420ms cubic-bezier(0.32, 0.72, 0, 1);

  img {
    flex: 0 0 auto;
    width: ${({ $isCompact }) => ($isCompact ? "2rem" : "3.25rem")};
    height: ${({ $isCompact }) => ($isCompact ? "2rem" : "3.25rem")};
    object-fit: cover;
    border-radius: ${({ $isCompact }) => ($isCompact ? "50%" : "0.65rem")};
    transition:
      width 420ms cubic-bezier(0.32, 0.72, 0, 1),
      height 420ms cubic-bezier(0.32, 0.72, 0, 1),
      border-radius 420ms cubic-bezier(0.32, 0.72, 0, 1);
  }

  span {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: ${({ $isCompact }) => ($isCompact ? "0" : "0.2rem")};
    transition: gap 220ms ease;
  }

  strong,
  small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ $isCompact }) => ($isCompact ? "0.72rem" : "0.82rem")};
    transition: font-size 220ms ease;
  }

  small {
    max-height: ${({ $isCompact }) => ($isCompact ? "0" : "1rem")};
    color: ${({ theme }) => theme.colors["gray-400"]};
    font-size: 0.7rem;
    opacity: ${({ $isCompact }) => ($isCompact ? 0 : 1)};
    transform: translateY(
      ${({ $isCompact }) => ($isCompact ? "-0.25rem" : "0")}
    );
    transition:
      max-height 220ms ease,
      opacity 160ms ease,
      transform 220ms ease;
  }
`;

export const IconButton = styled.button<{ $isCompact: boolean }>`
  display: grid;
  flex: 0 0 ${({ $isCompact }) => ($isCompact ? "2.25rem" : "2.75rem")};
  place-items: center;
  width: ${({ $isCompact }) => ($isCompact ? "2.25rem" : "2.75rem")};
  height: ${({ $isCompact }) => ($isCompact ? "2.25rem" : "2.75rem")};
  margin-right: ${({ $isCompact }) => ($isCompact ? "0.125rem" : "0.25rem")};
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  transition:
    flex-basis 420ms cubic-bezier(0.32, 0.72, 0, 1),
    width 420ms cubic-bezier(0.32, 0.72, 0, 1),
    height 420ms cubic-bezier(0.32, 0.72, 0, 1),
    margin-right 420ms cubic-bezier(0.32, 0.72, 0, 1),
    background 180ms ease,
    transform 180ms ease;

  &:active {
    background: rgba(247, 251, 255, 0.12);
    transform: scale(0.94);
  }

  svg {
    width: ${({ $isCompact }) => ($isCompact ? "1.05rem" : "1.35rem")};
    height: ${({ $isCompact }) => ($isCompact ? "1.05rem" : "1.35rem")};
    transition: width 220ms ease, height 220ms ease;
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
