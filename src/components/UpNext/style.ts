import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 25rem;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors["blue-600"]};
  border-radius: 1.75rem;
  background: ${({ theme }) => theme.colors["blue-800"]};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;

  span {
    color: ${({ theme }) => theme.colors["cyan-400"]};
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.45rem;
  }

  a {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid ${({ theme }) => theme.colors["blue-600"]};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors["gray-300"]};
  }
`;

export const List = styled.ol`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.35rem;
`;

export const TrackButton = styled.button<{ $isCurrent: boolean }>`
  display: grid;
  grid-template-columns: 1.7rem 2.8rem minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.65rem;
  width: 100%;
  min-height: 3.5rem;
  padding: 0.45rem;
  border: 1px solid
    ${({ theme, $isCurrent }) =>
      $isCurrent ? theme.colors["blue-500"] : "transparent"};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors["gray-300"]};
  text-align: left;
  background: ${({ $isCurrent }) =>
    $isCurrent ? "rgba(25, 111, 157, 0.16)" : "transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  img {
    width: 2.8rem;
    height: 2.8rem;
    object-fit: cover;
    border-radius: 0.6rem;
  }
`;

export const Index = styled.span`
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors["gray-500"]};
  font-size: 0.7rem;

  svg {
    color: ${({ theme }) => theme.colors["cyan-400"]};
  }
`;

export const TrackInfo = styled.span`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.2rem;

  strong,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors["gray-400"]};
    font-size: 0.7rem;
  }
`;

export const Duration = styled.span`
  color: ${({ theme }) => theme.colors["gray-500"]};
  font-size: 0.65rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors["cyan-400"]};
  }
`;

export const ViewAll = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.25rem;
  margin-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors["blue-700"]};
  color: ${({ theme }) => theme.colors["cyan-400"]};
  font-size: 0.72rem;
  font-weight: 700;

  svg {
    width: 0.9rem;
  }
`;

export const Empty = styled.p`
  display: grid;
  flex: 1;
  place-items: center;
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-size: 0.85rem;
  text-align: center;
`;
