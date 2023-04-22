import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
`;

export const Container = styled.section`
  width: min(82.25rem, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: ${(p) => p.theme["p-lg"]};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme["gap-2"]};
  color: ${(p) => p.theme.colors["purple-800"]};

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const PlayerControls = styled.div``;
