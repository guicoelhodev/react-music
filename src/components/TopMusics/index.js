import CardMusic from "components/CardMusic";
import SearchMusic from "components/Search"
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import api from 'services/api';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from 'react';
import { LoadingContainer } from "GlobalStyle";
import styled from "styled-components";
import InfiniteScroll from "components/InfiniteScroll";

const TopMusics = () => {

    const [ musicas, setMusicas ] = useState([]);
    const [active, setActive] = useState(false);
    const [ loader, setLoader ] = useState(true);

    function handleState(bool){
        setActive(bool);
    }
    console.log(musicas.length);
    useEffect(() => {

        function getAlbum(){
            if(active === false){
                api.get(`/radio/37151/tracks?index=0&limit=10`)
                    .then((res) => setMusicas((previousState) => [...previousState, ...res.data.data]))
                    .catch((err) => { console.error(err)})
            }
            setActive(true);
        }
        getAlbum();
        setLoader(false);
    }, [active]) 

   
     
   
    return(
        <>
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
                        {
                            musicas.length !== 0 && (<InfiniteScroll  loadMore={handleState} />)  
                        }

                    </ContainerMusic>
                    </ul>
                )
            }

        </Container>
        </> 

    )
}

export default TopMusics

export const aaag = styled.li`
background-color: red;
height:20px;
width:30px;
`