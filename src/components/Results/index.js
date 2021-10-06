import SearchMusic from 'components/Search';
import { ContainerMusic } from 'design/ContainerMusic';
import { Container } from 'design/ContainerPages';

const Results = () => {

    return(
        <Container>
            <SearchMusic />
            <p>Esses são os resultados da sua pesquisa</p>
            <ContainerMusic>
                
            </ContainerMusic>
        </Container>
    )
}

export default Results