import Header from 'components/Header';
import MyPlaylist from 'components/MyPlaylist';
import HomePageNav from 'pages/HomePageNav';
import { Switch, Route } from "react-router-dom";

import * as S from './style';

const Home = () => {

    return(
        <S.Container>
            <S.EmptyDiv />
            <section>
                <Header />

                <Switch>
                    <Route exact path="/home" component={HomePageNav} />
                    <Route path="/home/myPlaylist" component={MyPlaylist} />
                </Switch>
            </section>
        </S.Container>
    )
}

export default Home;