import React, {useState, useEffect} from 'react';
import GameContainer from "./GameContainer";
import axios from "axios"
const PlayerContainer = (props) => {

    const [gameStart, setGameStart] = useState(false);
    const {playerList, setPlayerList, gameResultList, setGameResultList} = props;
    const [playerName, setPlayerName] = useState("");
    const [playerNameList, setPlayerNameList] = useState([]);

    const [isInputScreen, setIsInputScreen] = useState(true);

    const getRandomResult = (name)=> {
        axios({
            url: "http://localhost:8080/bow/random",
            method: "post",
            data: {name}
        }).then(result => {
            setGameResultList((state)=>{
                return [...state, result.data]
            })
        })
    }

    const startRandom= async ()=>{

        if(playerNameList.length<1){
            alert("사용자는 한명 이상이어야 합니다.")
            return false;
        }

        for (let i = 0 ; i < playerNameList.length ; i++){
            await getRandomResult(playerNameList[i]);
        }
        setGameStart(true);
        setIsInputScreen(false);
    }

    return (
        <>
            {
                !gameStart ? (
                    <div>
                        <h3 className="title">게임에 참가할 사람의 이름을 입력해주세요</h3>
                        <div className="centerWrapper" style={{flexDirection : "column"}}>
                            {playerNameList.map(playerName=>{
                                return (<div>{playerName}</div>)
                            })}
                        </div>
                        <div className="centerWrapper">
                            <input value={playerName} 
                                onChange={(e)=>{
                                    setPlayerName(e.target.value)
                                }}
                                onKeyPress={(e)=>{
                                    if(e.key === "Enter"){
                                        setPlayerNameList([...playerNameList, playerName]);
                                        setPlayerName("");
                                    }
                                }}
                            />
                        </div>
                        <div className="centerWrapper">
                            <button onClick={()=>{
                                if(playerNameList.length<1){
                                    alert("사용자는 한명 이상이어야 합니다.")
                                    return false;
                                }
                                setGameStart(true);
                            }}>
                                직접입력
                            </button>
                            <button onClick={startRandom}>
                                랜덤점수
                            </button>
                        </div>
                    </div>
                ) : (
                    <GameContainer
                        setPlayerList={setPlayerList}
                        playerList={playerList}
                        playerNameList={playerNameList}
                        setGameResultList={setGameResultList}
                        gameResultList={gameResultList}
                        isInputScreen={isInputScreen}
                        setIsInputScreen={setIsInputScreen}
                    />
                )
            }
        </>
     );
}
 
export default PlayerContainer;