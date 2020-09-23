import React, {useState, useEffect} from 'react';
import GameContainer from "./GameContainer"

const PlayerContainer = () => {

    const [gameStart, setGameStart] = useState(false);

    const [playerList, setPlayerList] = useState([]);
    const [playerName, setPlayerName] = useState("");

    const gamePlayStart = ()=>{
        setGameStart(true)
    }

    return (
        <>
            {
                !gameStart ? (
                    <div>
                        <h3 className="title">게임에 참가할 사람의 이름을 입력해주세요</h3>
                        <div className="centerWrapper" style={{flexDirection : "column"}}>
                            {
                                playerList.map(player=>{
                                    return (
                                        <div>
                                            {player}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="centerWrapper">
                            <input value={playerName} 
                                onChange={(e)=>{
                                    setPlayerName(e.target.value)
                                }}
                                onKeyPress={(e)=>{
                                    if(e.key === "Enter"){
                                        setPlayerList([...playerList,playerName])
                                        setPlayerName("");
                                    }
                                }}
                            />
                        </div>
                        <div className="centerWrapper">
                            <button onClick={gamePlayStart}>
                                시작하기
                            </button>
                        </div>
                    </div>
                ) : (
                    <GameContainer/>
                )
            }
        </>
     );
}
 
export default PlayerContainer;