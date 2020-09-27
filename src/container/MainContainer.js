import React, {useState, useEffect} from 'react';
import axios from "axios"

import PlayerContainer from "./PlayerContainer"
import RankComponent from '../components/RankComponent';

const MainContainer = () => {
    // 맨처음 보여지는 화면

    /*
        3항 연산자로 
    */
    // 보여질 화면을 결정지을 state값들
    const [isStart, setIsStart] = useState(false)
    const [isRankPage, setIsRankPage] = useState(false);

    // isStart를 true로 변경 => isRankPage가 false이면 Player를 입력하는 화면 렌더
    const gameStart = ()=>{
        setIsStart(true)
    }

    // isStart, isRankPage를 true로 변경 => rankPage 렌더
    const goRank = ()=>{
        setIsStart(true);
        setIsRankPage(true);
    }

    // isStart, isRankPage를 false로 변경 => main페이지 렌더
    const goMain = ()=>{
        setIsStart(false);
        setIsRankPage(false);
    }

    // 플레이어가 담긴 리스트
    const [playerList, setPlayerList] = useState([]);

    // 게임 결과가 담긴 리스트
    const [gameResultList, setGameResultList] = useState([]);

    return ( 
        <div className="container">
            {
                !isStart ? (
                    <>
                        <h2 className="title">볼링 게임</h2>
                        <div className="centerWrapper">
                            <button className="btnStart" onClick={gameStart}>게임 시작</button>
                            <button className="btnStart" onClick={goRank}>순위 보기</button>
                        </div>
                    </>
                ) : !isRankPage ? (
                    /* PlayerContainer에서 현재 컴포넌트에서 정의된 함수와 state값들을 사용하기 위해서 전달 */
                    <PlayerContainer 
                        setPlayerList={setPlayerList} 
                        playerList={playerList} 
                        gameResultList={gameResultList} 
                        setGameResultList={setGameResultList} 
                        goMain={goMain}
                    />
                ) : (
                    <RankComponent goMain={goMain}/>
                )
            }
        </div>
     );
}
 
export default MainContainer;