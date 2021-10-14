import CardMusic from "components/CardMusic";
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import api from "services/api";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";
import { LoadingContainer } from "GlobalStyle";
import InfiniteScroll from "components/InfiniteScroll";
import styled from "styled-components";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const TopMusics = () => {
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [musicas, setMusicas] = useState([]);
  const [number, setNumber] = useState(0);

  const result = useSelector((state) => state.getUser[0]);

  useEffect(() => {
    function getAlbum() {
      if (active === false) {
        api
          .get(`/playlist/3155776842?index=${number}&limit=12`)
          .then((res) => {
            setDataPlaylist(res.data);
            setMusicas((previousState) => [
              ...previousState,
              ...res.data.tracks.data,
            ]);
          })

          .catch((err) => {
            console.error(err);
          });
      }
    }

    getAlbum();
    setLoading(false);
  }, [active, number]);

  const handleState = useCallback((bool) => {
    setActive(bool);
    setNumber((previousState) => previousState + 12);
  }, []);

  var musicFilter = [];

  //remover itens duplicados
  musicas.forEach((item) => {
    var duplicated =
      musicFilter.findIndex((redItem) => {
        return item.id === redItem.id;
      }) > -1;
    if (!duplicated) {
      musicFilter.push(item);
    }
  });

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <ScaleLoader color="#EB8414" />
          <p>Carregando</p>
        </LoadingContainer>
      ) : (
        <ContainerTop>
          <p>{`Bom dia ${result}, veja aqui as melhores do nosso ranking diário que separamos pra você`}</p>
          <h2>{dataPlaylist.title}</h2>
          <h3>{`Pessoas seguindo essa playlist: ${dataPlaylist.fans}`}</h3>
          <ul>
            <ContainerMusic>
              {musicFilter.map((item) => {
                return (
                  <li key={item.id}>
                    <CardMusic
                      interaction={true}
                      title={item.title}
                      artist={item.artist.name}
                      duration={item.duration}
                      image={item.album.cover_big}
                      link={item.link}
                      audio={item.preview}
                      id={item.id}
                    />
                  </li>
                );
              })}
              {musicas.length !== 0 && (
                <InfiniteScroll loadMore={handleState} />
              )}
            </ContainerMusic>
          </ul>
        </ContainerTop>
      )}
    </>
  );
};

export default TopMusics;

const ContainerTop = styled(Container)`
  padding-top: 20px;
  padding-right: 20px;

  h2 {
    font-size: 2.4rem;
    color: #3357ab;
  }

  h3 {
    color: #333333;
    text-align: right;
  }
  gap: 20px;

  @media (max-width: 890px) {
    padding: 10px 20px;
  }

  @media (max-width: 340px) {
    h2 {
      text-align: center;
    }
  }
`;
