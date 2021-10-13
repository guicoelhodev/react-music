import { PlayButton } from "design/PlayButton";
import styled from "styled-components";

export const Text = styled.p`
  text-align: center !important;
`;

export const ImageDiv = styled.div`
  width: 180px;
  height: 180px;
  display: grid;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const PlayerInteraction = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 30px;
`;

export const DeezerButton = styled.a`
  display: grid;
  place-items: center;
  width: 200px;
  height: 60px;
  background-color: var(--white);
  padding: 10 20px;
  border-radius: 12px;
  border: 1px solid var(--black);
  cursor: pointer;
`;
export const Img = styled.img`
  width: 80%;
  object-fit: contain;
`;

export const ContainerPlayer = styled.div`
  position: fixed;
  margin-right: auto;
  z-index: 2;
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--light-orange);

  p {
    padding: 0 30px;
    text-align: center;
  }

  aside {
    display: flex;
    color: #222222;
    padding-bottom: 8px;

    p {
      word-wrap: break-word;
    }
  }

  h3 {
    text-align: center;
    padding: 0 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    aside {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        text-align: center;
      }
    }
  }

  button {
    :focus {
      outline: 1px solid red;
    }
  }
  @media (max-width: 890px) {
    width: 100%;
    height: 120px;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    bottom: 0;

    h2 {
      display: none;
    }
    ${Text} {
      display: none;
    }

    aside {
      flex-direction: column;
    }
    div {
      width: 100%;
      max-width: 400px;
    }
    p,
    h3 {
      text-align: start !important;
      padding-top: 2px;
      padding-left: 5px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    ${ImageDiv} {
      width: 120px;
      height: 120px;
      bottom: 0;
      transform: none;
      ${Image} {
        width: 120px;
        height: 120px;
        object-fit: contain;
      }
    }

    @media (max-width: 550px) {
      span {
        display: none !important;
      }

      aside {
        gap: 0px;
      }

      a {
        height: 100%;
        border-radius: 0;
        border: 1px solid white;
      }
      h3 {
        font-size: 0.8rem;
        padding-left: 10px;
        padding-top: 5px;
        width: 140px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      p {
        font-size: 0.8rem;
        padding-left: 10px;
      }
      ${ImageDiv} {
        width: 90px;
        height: 90px;
        ${Image} {
          width: 90px;
          height: 90px;
        }
      }
    }

    @media (max-width: 430px) {
      height: 70px;

      a {
        width: 180px !important;
      }

      div {
        gap: 2px;
        padding-left: 4px;
        aside {
          gap: 2px;
        }
      }
      ${ImageDiv} {
        width: 70px;
        height: 70px;
        ${Image} {
          width: 70px;
          height: 70px;
        }
      }

      article {
        padding: 0;
      }

      a {
        width: 80px;
      }

      ${PlayButton} {
        width: 40px;
        height: 40px;
        transform: translateX(-5px);
      }
    }
  }
`;
