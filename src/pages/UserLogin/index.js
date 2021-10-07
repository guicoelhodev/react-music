import { Button } from "design/Button";
import { Input } from "design/Input";
import LogoTitle from "design/LogoTitle";
import * as S from './style'
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import { getUser } from "store/InfoUser/infoUser.actions";
import { useState } from "react";

const UserLogin = () => {

    const dispatch = useDispatch();
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');

    const history = useHistory();

    return(
        <S.ContainerUser>
            <LogoTitle />
            <h2>O seu aplicativo de músicas da web</h2>
            <p>Antes de acessar a plataforma, precisamos de algumas informações </p>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(getUser(nome, cidade))
                    history.push('/home')}}> 
            <section>
                <label>Nome</label>
                <Input placeholder="Digite seu primeiro nome" required
                onChange={(event) => setNome(event.target.value)}/>
            </section>

            <section>
                <label>Cidade</label>
                <Input required placeholder="Digite a cidade que você está" onChange={(e) => {
                    setCidade(e.target.value);
                }}/>
            </section>

            <aside>
                <Button type="submit" >
                    Acessar
                </Button>
            </aside>
            </form>
        </S.ContainerUser>
    )
}

export default UserLogin;