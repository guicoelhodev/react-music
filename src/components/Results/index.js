import CardMusic from "components/CardMusic";
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { LoadingContainer } from "GlobalStyle";

import api from "services/api";

const Results = ({ inputValue, selectValue }) => {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchMusic() {
      api
        .get(`/search/${selectValue}?q=${inputValue}`)
        .then((res) => setMusicData(res.data.data));
    }
    fetchMusic();
    setLoading(false);
  }, [selectValue, inputValue]);

  console.log(`/search/${selectValue}?q=${inputValue}`);
  return (
    <Container>
      <p>Esses são os resultados da sua pesquisa</p>
      {loading ? (
        <LoadingContainer>
          <ScaleLoader color="#EB8414" />
          <p>Carregando</p>
        </LoadingContainer>
      ) : (
        <ContainerMusic>
          {selectValue === "" || selectValue === "track" ? (
            <>
              {musicData.map((item) => {
                return (
                  <CardMusic
                    key={item.id}
                    interaction={true}
                    title={item.title}
                    artist={item.artist.name}
                    duration={item.duration}
                    image={item.album.cover_medium}
                    link={item.link}
                    audio={item.preview}
                    id={item.id}
                  />
                );
              })}
            </>
          ) : (
            <>
              {musicData.map((item) => {
                return (
                  <CardMusic
                    key={item.id}
                    interaction={false}
                    title={item.title}
                    artist={item.name}
                    image={item.cover_medium}
                    link={item.link}
                    id={item.id}
                  />
                );
              })}
            </>
          )}
        </ContainerMusic>
      )}
    </Container>
  );
};

export default Results;
