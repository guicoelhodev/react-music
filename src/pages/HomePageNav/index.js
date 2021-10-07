import Results from "components/Results";
import SearchMusic from "components/Search"
import TopMusics from "components/TopMusics";
import { Container } from "design/ContainerPages"
import { useState, useEffect } from 'react'

const HomePageNav = () => {
    const [showResult, setShowResult] = useState(false);
    const [inputValue, setInputValue ] = useState('');
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {

        const togglePage = () => {
            if(inputValue.length !== 0){
                setShowResult(true)
            }else if (inputValue.length === 0){
                setShowResult(false)
            }
        }
        togglePage()
    }, [showResult, inputValue]);

    function changeSelect(data){
        setSelectValue(data)
    }

    return(
        <Container>
            <SearchMusic setInputValue ={setInputValue} selectValueChange={changeSelect}/>
            {
                showResult ? <Results inputValue={inputValue} selectValue={selectValue}/> : <TopMusics />
            }
        </Container>
    )
}
export default HomePageNav