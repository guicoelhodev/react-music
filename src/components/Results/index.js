import CardMusic from "components/CardMusic";
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import { useEffect, useState } from "react";

import api from "services/api";

const Results = ({ inputValue, selectValue }) => {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    api
      .get(`/search/${selectValue}?q=${inputValue}`)
      .then((res) => setMusicData(res.data.data));
  }, [selectValue, inputValue]);

  console.log(inputValue);
  return (
    <Container>
      <p>Esses são os resultados da sua pesquisa</p>
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
    </Container>
  );
};

export default Results;
