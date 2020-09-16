import React, {useState, useEffect} from 'react';
import StartContainer from "./GameContainer"
import styled from "styled-components"

const Container = styled.div`
    width : 568px;
    margin : 0 auto;
    padding : 20px;
    background-color : gray;
    min-height : 768px;
`

const MainCenterWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const Maintitle = styled.h2`
    text-align : center;
    color : white;
`

const StartButton = styled.button`
    width : 200px;
`

// 메인 컨테이너
const MainContainer = () => {

    // state
    const [isStart, setIsStart] = useState(false);

    // func
    const startGame = ()=>{
        setIsStart(true);
    }
    
    return ( 
        <Container>
            {
                !isStart ? (
                    <MainCenterWrapper>
                        <Maintitle>
                            볼링 게임
                        </Maintitle>
                        <StartButton onClick={setIsStart}>
                            게임시작
                        </StartButton>
                    </MainCenterWrapper>  
                ) : (
                    <StartContainer/>
                )
            }      
        </Container>
     );
}

export default MainContainer;