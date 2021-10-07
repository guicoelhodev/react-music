import { Input } from 'design/Input';
import * as S from './style';
import { useState } from 'react';

const SearchMusic = ({setInputValue, selectValueChange}) => {

    const [selectValue, setSelectValue] = useState('');
   
    selectValueChange(selectValue);
 
    
    return(
        <S.Container>
            <S.SearchMusic>
                <Input type="text" placeholder="Procure sua música preferida aqui"
                onChange={(event) => {
                    setInputValue(event.target.value);
                    ;
                }}

                />
                <select onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="">Artista</option>
                    <option value="album">Album</option>
                    <option value="track">Título</option>
                </select>
            </S.SearchMusic>
        </S.Container>
    )
}

export default SearchMusic