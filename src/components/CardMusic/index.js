import * as S from './style';
import { FaPlay } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusic } from 'store/GetMusic/getMusic.actions';
import { getFavoriteMusic, removeItem } from 'store/FavoriteMusic/favoriteMusic.actions';

/*interection: propriedade para verificar se o link da api tem informações como duração, arquivo.mp3*/


const CardMusic = ({id,title, artist, duration, image, link, interaction, audio, remove}) => {
    var playlist = useSelector(state => state.getFavoriteMusic);
    const dispatch = useDispatch();  
    var minutes = parseInt((duration/60).toFixed(2));
    var seconds = duration%60;

    const [ color, setColor ] = useState(false);
    const [ cor, setCor ] = useState('#000');

    useEffect(() => {
        function handleColor(){
            if(color === true){
                setCor('#ef8d8d')
            }else{
                setCor('#222222');
            }
        }

        handleColor();
    }, [color])


    return(
        <S.ContainerMusic>
            <S.Image src={image} alt={`música  ${title}`} />
            <S.DataItems>
                <S.Title>{title}</S.Title>
                <h4>{artist}</h4>
                {
                    interaction ? (
                    <>
                        <aside>
                            <p>Duração:</p>
                            <p>{`${minutes}:${seconds} min`}</p>
                        </aside>    
                        <aside>
                            <S.PlayButtonM
                            onClick={() => {
                                dispatch(getMusic(title, artist, duration, image, link, audio))
                            }}
                            
                            ><FaPlay /></S.PlayButtonM>  
                            {
                                remove ? <></>
                                :
                                <S.Favorite color={cor}
                                onClick={() => {
                                    dispatch(getFavoriteMusic(title, artist, duration, image, link, audio))
                                    setColor(!color)}}><BsFillHeartFill /></S.Favorite>
                            }    
                        </aside>
                        
                    </>
                    ):
                    (
                    <>
                        <a href={link}>Ouvir na deezer</a>    
                    </>
                    )
                }
                {
                    remove ? <S.RemoveButton
                    onClick={() => dispatch(removeItem(title)) }
                    >Remover item</S.RemoveButton> : <></>
                }
            </S.DataItems>
        </S.ContainerMusic>
    )
}

export default memo(CardMusic)
