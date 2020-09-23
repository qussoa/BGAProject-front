import React, {useState, useEffect} from 'react';
import axios from "axios"

import PlayerContainer from "./PlayerContainer"

const MainContainer = () => {

    const [isStart, setIsStart] = useState(false)

    const playerStart = ()=>{
        setIsStart(true)
    }

    axios({
        url:"http://localhost:8080/bow/start",
        method : "post",
        data : {
            list : [
                [1,2],
                [1,2],
                [1,2],
                [1,2],
                [1,2],
                [1,2],
                [1,2],
                [1,2],
                [1,2],
                [1,2],
            ]
        }
    })

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
                    <PlayerContainer/>
                )
            }
        </div>
     );
}
 
export default MainContainer;