import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at 18% 0%, rgba(19, 90, 126, 0.14), transparent 30rem),
    ${({ theme }) => theme.colors["blue-900"]};
`;

export const Container = styled.div`
  width: min(92rem, 100%);
  margin: 0 auto;
  padding: 0 1.5rem 4rem;

  @media (max-width: 640px) {
    padding: 0 1rem 7rem;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto minmax(16rem, 38rem) auto;
  align-items: center;
  gap: clamp(1rem, 3vw, 2.5rem);
  min-height: 5.25rem;

  @media (max-width: 900px) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 2.8rem minmax(0, 1fr);
    gap: 0.65rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  white-space: nowrap;

  > span {
    display: grid;
    place-items: center;
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid ${({ theme }) => theme.colors["blue-500"]};
    border-radius: 0.85rem;
    color: ${({ theme }) => theme.colors["cyan-400"]};
    background: ${({ theme }) => theme.colors["blue-800"]};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  strong {
    font-size: 1rem;
    letter-spacing: -0.03em;
  }

  @media (max-width: 520px) {
    strong {
      display: none;
    }
  }
`;

export const HeaderActions = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.55rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const PlaylistButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.75rem;
  padding: 0 0.8rem;
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors["blue-500"] : theme.colors["blue-700"]};
  border-radius: 0.8rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors["cyan-400"] : theme.colors["gray-300"]};
  background: ${({ theme }) => theme.colors["blue-800"]};

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  span {
    font-size: 0.72rem;
    font-weight: 700;
  }
`;

export const FavoriteCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.75rem;
  padding: 0 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors["blue-700"]};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors["pink-200"]};
  background: ${({ theme }) => theme.colors["blue-800"]};

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.72rem;
    font-weight: 700;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const Featured = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 2.15fr) minmax(18rem, 0.85fr);
  gap: 1rem;

  @media (max-width: 1160px) {
    grid-template-columns: minmax(0, 1.65fr) minmax(18rem, 1fr);
  }
`;

export const Library = styled.section`
  scroll-margin-top: 1rem;
`;

export const LibraryHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;

  > div:first-child > span {
    color: ${({ theme }) => theme.colors["cyan-400"]};
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.75rem, 3vw, 2.6rem);
    letter-spacing: -0.04em;
  }

  p {
    margin-top: 0.45rem;
    color: ${({ theme }) => theme.colors["gray-400"]};
    font-size: 0.8rem;
  }

  @media (max-width: 700px) {
    align-items: stretch;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex: 0 0 auto;
  gap: 0.55rem;
  overflow-x: auto;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 2.75rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.colors["blue-600"]};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors["gray-300"]};
    background: ${({ theme }) => theme.colors["blue-800"]};
    font-size: 0.72rem;
    font-weight: 700;
    white-space: nowrap;

    &.active {
      border-color: ${({ theme }) => theme.colors["cyan-400"]};
      color: ${({ theme }) => theme.colors["blue-900"]};
      background: ${({ theme }) => theme.colors["cyan-400"]};
    }

    span {
      display: grid;
      place-items: center;
      min-width: 1.35rem;
      height: 1.35rem;
      padding: 0 0.25rem;
      border-radius: 999px;
      color: ${({ theme }) => theme.colors.white};
      background: rgba(255, 255, 255, 0.12);
      font-size: 0.62rem;
    }
  }
`;

export const TrackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;

  > div:last-child {
    grid-column: 1 / -1;
    height: 1px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
  }

  @media (max-width: 370px) {
    grid-template-columns: 1fr;
  }
`;

export const Status = styled.div`
  display: grid;
  min-height: 15rem;
  place-items: center;
  border: 1px dashed ${({ theme }) => theme.colors["blue-600"]};
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-size: 0.85rem;
  text-align: center;
`;

export const LoadingMore = styled.p`
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-size: 0.75rem;
  text-align: center;
`;
