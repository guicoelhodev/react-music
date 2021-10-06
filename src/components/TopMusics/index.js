import CardMusic from "components/CardMusic";
import SearchMusic from "components/Search"
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import api from 'services/api';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from 'react';
import { LoadingContainer } from "GlobalStyle";
import styled from "styled-components";
import { useRef } from "react";

const TopMusics = () => {

    const [ musicas, setMusicas ] = useState([]);
    const [active, setActive] = useState(false);
    const [ loader, setLoader ] = useState(true);
    const loadMoreRef = useRef();

    

    useEffect(() => {

        function getAlbum(){
            if(active === false){
                api.get('/radio/37151/tracks?index=0&limit=10')
                    .then((res) => setMusicas((previousState) => [...previousState, ...res.data.data]))
                    .catch((err) => { console.error(err)})
            }
            setActive(true);
        }
        getAlbum();
        setLoader(false);
        
    }, [musicas, active])

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "20px",
          threshold: 1.0
        };
    
        const observer = new IntersectionObserver((entities) => {
          const target = entities[0];

          if (target.isIntersecting){
            setActive(false);

          }
        }, options);
    
        if (loadMoreRef.current){
          observer.observe(loadMoreRef.current);
          console.log('athduhuha')

        }

        return () => {
            observer.disconnect();
        }
      }, []);
    
    return(
        <Container >
            <SearchMusic />
            <p>Bom dia Guilherme, veja aqui as melhores do ranking que separamos pra você</p>
            {
                loader ?    <LoadingContainer>
                                <ScaleLoader hash={100} color="#EB8414"/>
                            </LoadingContainer>

                : (
                    <ul>
                    <ContainerMusic>
                        
                        {
                            musicas.map((item) => {
                                return <li key={item.id}>
                                            <CardMusic
                                                title={item.title}
                                                artist={item.artist.name} 
                                                duration={item.duration}
                                                image={item.album.cover_big}
                                            />

                                        </li>
                            })
                        }
                        
                        <ObserverA ref={loadMoreRef}></ObserverA>
                    </ContainerMusic>
                    
                    </ul>
                )
            }
            <button onClick={() => {setActive(!active)}}>UASHUASHUASHAUSH</button>

        </Container>
    )
}

export default TopMusics

const ObserverA = styled.li`

height:0px;
background-color:red;
width:100%;
`