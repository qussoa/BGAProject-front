import React, {useState, useEffect} from 'react';
import GameContainer from "./GameContainer";
import axios from "axios"
const PlayerContainer = (props) => {

    const [gameStart, setGameStart] = useState(false);

    const {player, setPlayer} = props;
    
    const [playerName, setPlayerName] = useState("");

    const gamePlayStart = ()=>{
        axios({
            url:"http://localhost:8080/bow/start",
            method : "post",
            data : player
        }).then(result=>{
            setPlayer({
                ...player,
                result : result.data.frameList
            })
        })
        setGameStart(true)
    }

    useEffect(()=>{
        console.log(player.result)
    },[player])


    return (
        <>
            {
                !gameStart ? (
                    <div>
                        <h3 className="title">게임에 참가할 사람의 이름을 입력해주세요</h3>
                        <div className="centerWrapper" style={{flexDirection : "column"}}>
                            {player.name}
                        </div>
                        <div className="centerWrapper">
                            <input value={playerName} 
                                onChange={(e)=>{
                                    setPlayerName(e.target.value)
                                }}
                                onKeyPress={(e)=>{
                                    if(e.key === "Enter"){
                                        setPlayer({...player,name:playerName})
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
                    <GameContainer setPlayer={setPlayer} player={player}/>
                )
            }
        </>
     );
}
 
export default PlayerContainer;