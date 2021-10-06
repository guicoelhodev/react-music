import * as S from './style';
import { FaPlay } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs'
import { useState, useEffect } from 'react';

const CardMusic = ({title, artist, duration, image}) => {
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
                <h3>{title}</h3>
                <h4>{artist}</h4>
                <aside>
                    <p>Duração:</p>
                    <p>{`${minutes}:${seconds} min`}</p>
                </aside>    
                <aside>
                    <S.PlayButtonM><FaPlay /></S.PlayButtonM>  
                    <S.Favorite color={cor}onClick={() => {setColor(!color)}}><BsFillHeartFill /></S.Favorite>    
                </aside>
            </S.DataItems>
        </S.ContainerMusic>
    )
}

export default CardMusic
