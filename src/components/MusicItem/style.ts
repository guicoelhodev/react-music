import styled from "styled-components";

export const Container = styled.article<{ $isCurrent: boolean }>`
  min-width: 0;
  padding: 0.55rem;
  border: 1px solid
    ${({ theme, $isCurrent }) =>
      $isCurrent ? theme.colors["blue-500"] : theme.colors["blue-700"]};
  border-radius: 1rem;
  background: ${({ theme, $isCurrent }) =>
    $isCurrent ? "rgba(19, 66, 99, 0.28)" : theme.colors["blue-800"]};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors["blue-500"]};
  }
`;

export const CoverButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  border: 0;
  border-radius: 0.72rem;
  background: ${({ theme }) => theme.colors["blue-700"]};

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transition: transform 250ms ease, opacity 180ms ease;
  }

  span {
    position: absolute;
    right: 0.7rem;
    bottom: 0.7rem;
    display: grid;
    place-items: center;
    width: 2.65rem;
    height: 2.65rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors["blue-900"]};
    background: ${({ theme }) => theme.colors["cyan-400"]};
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
    opacity: 0;
    transform: translateY(0.4rem);
    transition: opacity 180ms ease, transform 180ms ease;

    svg {
      width: 1.35rem;
      height: 1.35rem;
    }
  }

  &:hover,
  &:focus-visible {
    img {
      transform: scale(1.035);
      opacity: 0.72;
    }

    span {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (hover: none) {
    span {
      opacity: 1;
      transform: none;
    }
  }
`;

export const ContentMusic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 0.2rem 0.2rem;
`;

export const TrackButton = styled.button`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 0.2rem;
  border: 0;
  text-align: left;
  background: transparent;

  strong,
  span {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.82rem;
  }

  span {
    color: ${({ theme }) => theme.colors["gray-400"]};
    font-size: 0.72rem;
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  display: grid;
  flex: 0 0 2.75rem;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 50%;
  color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.colors["pink-200"] : theme.colors["gray-500"]};
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
    fill: currentColor;
  }
`;
