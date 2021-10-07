import CardMusic from "components/CardMusic";
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";
import { useSelector } from 'react-redux';

const MyPlaylist = () => {
    const data = useSelector(state => state.getFavoriteMusic); 
    const name = useSelector(state => state.getUser[0]);

   
    return(
        <Container>
            <p>Aqui estão as suas melhores músicas, vamos</p>
            <h2>Playlist de {name}</h2>
            <ContainerMusic>
                    {
                        data.map((item) => {
                            return <CardMusic key={item.id}
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
                        })
                    }
                    
            </ContainerMusic>
        </Container>
    )
}

export default MyPlaylist;

