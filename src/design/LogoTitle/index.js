import styled from "styled-components";
import { ReactComponent as IconMusic } from "assets/icons/icon-music.svg";

const LogoTitle = () => {
  return (
    <TitleContainer>
      <h1>React Music</h1>
      <IconMusic />
    </TitleContainer>
  );
};

export default LogoTitle;

const TitleContainer = styled.header`
  padding: 30px 0;
  display: flex;
  gap: 40px;
  align-items: center;
  h1 {
    font-size: clamp(2.4rem, -0.875rem + 8.333vw, 3rem);
    color: var(--orange);
    text-align: center;
  }

  svg {
    width: 90px;
    height: 90px;
    fill: var(--orange);
  }

  @media (max-width: 480px) {
    padding: 60px 10px 0 10px !important;

    h1 {
      font-size: 1.8rem;
    }
  }
`;
