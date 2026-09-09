import styled from "styled-components";

export const Container = styled.section<{
  $cover?: string;
  $isTransparent: boolean;
}>`
  position: relative;
  min-height: 25rem;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid ${({ theme }) => theme.colors["blue-500"]};
  border-radius: 1.75rem;
  background: ${({ theme, $isTransparent }) =>
    $isTransparent ? "transparent" : theme.colors["blue-900"]};
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.32);

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    inset: -4rem;
    background: ${({ $cover }) => ($cover ? `url(${$cover}) center/cover` : "none")};
    filter: blur(42px) saturate(0.75);
    opacity: ${({ $cover }) => ($cover ? 0.28 : 0)};
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: linear-gradient(125deg, rgba(5, 13, 31, 0.84), rgba(6, 18, 42, 0.96));
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  padding: 1.25rem;

  @media (max-width: 720px) {
    padding: 1.25rem;
  }
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors["gray-300"]};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  span {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors["cyan-400"]};
    box-shadow: 0 0 14px ${({ theme }) => theme.colors["cyan-400"]};
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const NowPlaying = styled.div`
  display: grid;
  grid-template-columns: minmax(12rem, 0.72fr) minmax(18rem, 1.28fr);
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3rem);

  @media (max-width: 720px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CoverWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 18rem;
  justify-self: center;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 1.25rem;
    box-shadow: 0 22px 44px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 720px) {
    align-self: stretch;
    max-width: none;

    img {
      aspect-ratio: 4 / 5;
    }
  }
`;

export const PlayingBadge = styled.span`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(139, 244, 255, 0.35);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors["cyan-300"]};
  background: rgba(4, 15, 31, 0.82);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const PlayerInfo = styled.div`
  min-width: 0;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const TrackHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  div {
    min-width: 0;
  }

  p {
    margin-bottom: 0.45rem;
    overflow: hidden;
    color: ${({ theme }) => theme.colors["cyan-400"]};
    font-size: 0.73rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  h2,
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.6rem, 3vw, 2.65rem);
    line-height: 1.05;
  }

  h3 {
    margin-top: 0.55rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  display: grid;
  flex: 0 0 2.75rem;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.colors["blue-500"]};
  border-radius: 50%;
  color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.colors["pink-200"] : theme.colors["gray-300"]};
  background: rgba(11, 26, 51, 0.74);

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: currentColor;
  }
`;

export const WaveSection = styled.div`
  margin-top: 1.65rem;
`;

export const Timeline = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-size: 0.7rem;
  font-variant-numeric: tabular-nums;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.45rem, 1.5vw, 1.1rem);
  margin-top: 1.2rem;
`;

export const SecondaryButton = styled.button<{ $isActive?: boolean }>`
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 50%;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors["cyan-400"] : theme.colors["gray-300"]};
  background: transparent;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.06);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.28;
  }
`;

export const PlayButton = styled.button`
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors["blue-900"]};
  background: ${({ theme }) => theme.colors["cyan-400"]};
  box-shadow: 0 0 28px rgba(32, 217, 238, 0.28);

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.55;
  }
`;

export const PlayerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-size: 0.7rem;

  input {
    width: 4.5rem;
    height: 1rem;
    appearance: none;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      height: 0.3rem;
      border-radius: 999px;
      background: ${({ theme }) => theme.colors["blue-600"]};
    }

    &::-webkit-slider-thumb {
      width: 0.8rem;
      height: 0.8rem;
      margin-top: -0.25rem;
      appearance: none;
      border: 2px solid ${({ theme }) => theme.colors["blue-900"]};
      border-radius: 50%;
      background: ${({ theme }) => theme.colors["cyan-400"]};
      box-shadow: 0 0 0.5rem rgba(32, 217, 238, 0.5);
    }

    &::-moz-range-track {
      height: 0.3rem;
      border-radius: 999px;
      background: ${({ theme }) => theme.colors["blue-600"]};
    }

    &::-moz-range-thumb {
      width: 0.8rem;
      height: 0.8rem;
      border: 2px solid ${({ theme }) => theme.colors["blue-900"]};
      border-radius: 50%;
      background: ${({ theme }) => theme.colors["cyan-400"]};
      box-shadow: 0 0 0.5rem rgba(32, 217, 238, 0.5);
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Error = styled.p`
  margin-top: 0.55rem;
  color: ${({ theme }) => theme.colors["red-300"]};
  font-size: 0.75rem;
`;

export const EmptyState = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, 0.7fr) 1.3fr;
  align-items: center;
  gap: 2rem;
  min-height: 18rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.8rem, 4vw, 3.1rem);
    line-height: 1.05;
  }

  p {
    max-width: 28rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
    line-height: 1.65;
  }
`;

export const EmptyCover = styled.div`
  width: 100%;
  max-width: 17rem;
  aspect-ratio: 1;
  border: 1px solid ${({ theme }) => theme.colors["blue-500"]};
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at 50% 50%, rgba(32, 217, 238, 0.2), transparent 32%),
    linear-gradient(135deg, ${({ theme }) => theme.colors["blue-700"]}, ${({ theme }) => theme.colors["blue-900"]});

  @media (max-width: 720px) {
    max-width: 15rem;
  }
`;
