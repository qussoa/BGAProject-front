import React, {useState, useEffect} from 'react';
import axios from "axios"

import PlayerContainer from "./PlayerContainer"

const MainContainer = () => {

    const [isStart, setIsStart] = useState(false)

    const playerStart = ()=>{
        setIsStart(true)
    }

    // 플레이어가 담긴 리스트
    const [playerList, setPlayerList] = useState([]);
    const [gameResultList, setGameResultList] = useState([]);

    return ( 
        <div className="container">
            {
                !isStart ? (
                    <>
                        <h2 className="title">볼링 게임</h2>
                        <div className="centerWrapper">
                            <button className="btnStart" onClick={playerStart}>게임 시작</button>
                        </div>
                    </>
                ) : (
                    <PlayerContainer setPlayerList={setPlayerList} playerList={playerList} gameResultList={gameResultList} setGameResultList={setGameResultList}/>
                )
            }
        </div>
     );
}
 
export default MainContainer;