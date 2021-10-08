import CardMusic from "components/CardMusic";
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import { useSelector } from "react-redux";
import { BackButton } from "design/Button";
import { BsBoxArrowInUp } from "react-icons/bs";
import styled from "styled-components";
const MyPlaylist = () => {
  const data = useSelector((state) => state.getFavoriteMusic);
  const name = useSelector((state) => state.getUser[0]);

  return (
    <Container>
      <Title>Playlist de {name}</Title>
      <ContainerMusic>
        {data.map((item) => {
          return (
            <CardMusic
              key={item.id}
              interaction={true}
              title={item.title}
              artist={item.artist}
              duration={item.duration}
              image={item.image}
              link={item.link}
              audio={item.audio}
              id={item.id}
              remove={true}
            />
          );
        })}
      </ContainerMusic>
      {data.length !== 0 ? (
        <BackButton
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsBoxArrowInUp />
        </BackButton>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default MyPlaylist;

const Title = styled.h2`
  font-size: 2rem;
  background: -webkit-linear-gradient(#eee, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
