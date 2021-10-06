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
            <aside>
                <S.ImgMusic src={image} alt="capa do álbum" />
            </aside>
            <div>
                <h5>{title}</h5>
                <h6>{`cantor: ${artist}`}</h6>
                <p>{`${minutes}:${seconds} min`}</p>
            </div>
            <S.MiniPlay>
                <FaPlay />
            </S.MiniPlay>
            <S.Favorite colorConfig={cor} onClick={() => { setColor(!color)}} >
                <BsFillHeartFill />
            </S.Favorite>
        </S.ContainerMusic>
    )
}

export default CardMusic
