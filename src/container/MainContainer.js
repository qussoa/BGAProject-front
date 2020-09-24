import React, {useState, useEffect} from 'react';
import axios from "axios"

import PlayerContainer from "./PlayerContainer"

const MainContainer = () => {

    const [isStart, setIsStart] = useState(false)

    const playerStart = ()=>{
        setIsStart(true)
    }

    const [player, setPlayer] = useState({
        list:[
            [10,0],
            [10,0],
            [10,0],
            [10,0],
            [10,0],
            [10,0],
            [10,0],
            [10,0],
            [10,0],
            [10,10,10],
        ],
        name : "",
        result:[

        ]
    });


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
                    <PlayerContainer setPlayer = {setPlayer} player ={player}/>
                )
            }
        </div>
     );
}
 
export default MainContainer;