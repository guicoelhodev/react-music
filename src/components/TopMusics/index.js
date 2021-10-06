import CardMusic from "components/CardMusic";
import SearchMusic from "components/Search"
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import api from 'services/api';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from 'react';
import { LoadingContainer } from "GlobalStyle";

const TopMusics = () => {

    const [ musicas, setMusicas ] = useState([]);
    const [active, setActive] = useState(false);

    const [loader, setLoader] = useState(true);

    useEffect(() => {

        function getAlbum(){
            if(active === false){
                api.get('/radio/37151/tracks?index=10&limit=5')
                    .then((res) => setMusicas(res.data.data))
                    .catch((err) => { console.error(err)})
            }
        }
        getAlbum();
        setActive(true);
        setLoader(false);
        
    }, [musicas, active])

    console.log(musicas);


    return(
        <Container>
            <SearchMusic />
            <p>Bom dia Guilherme, veja aqui as melhores do ranking que separamos pra você</p>
            {
                loader ?    <LoadingContainer>
                                <ScaleLoader hash={100} color="#EB8414"/>
                            </LoadingContainer>

                : (
                    <ContainerMusic>
                        {
                            musicas.map((item) => {
                                return <CardMusic 
                                key={item.id} 
                                title={item.title}
                                artist={item.artist.name} 
                                duration={item.duration}
                                image={item.album.cover_big}
                                />
                            })
                        }
                    </ContainerMusic>
                )
            }
        </Container>
    )
}

export default TopMusics

