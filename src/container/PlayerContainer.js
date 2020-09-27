import React, {useState, useEffect} from 'react';
import GameContainer from "./GameContainer";
import axios from "axios"
const PlayerContainer = (props) => {
    /*
        // 랜덤 버튼 클릭시
        화면이 그려짐 
        -> 랜덤점수를 클릭했을때 axios로 서버에 데이터를 요청 
        -> 데아터 결과가 state값에 저장됨 
        -> state값이 바뀌면 알아서 다시 렌더가됨

        // 직접 입력 클릭시
            gameStart true가 되면서
            직접 입력하는 화면이 그려짐 
    */
    // gameStart가 false이면 사용자 입력화면 렌더, true이면 GameContainer 렌더
    const [gameStart, setGameStart] = useState(false);

    // 상위 컴포넌트에서 props를 받아온다..
    const {playerList, setPlayerList, gameResultList, setGameResultList, goMain} = props;

    // input value를 관리하는 state
    const [playerName, setPlayerName] = useState("");

    // enter를 입력했을때 input value가 저장되는 배열 state
    const [playerNameList, setPlayerNameList] = useState([]);

    // 입력화면이냐 아니냐를 check 하는 state
    const [isInputScreen, setIsInputScreen] = useState(true);

    // random 결과를 서버에 요청하는 함수
    // http 통신 라이브러리 ajax와 유사함
    const getRandomResult  = (name)=> {
        axios({
            url: "http://localhost:8080/bow/random",
            method: "post",
            data: {name}
            // 호출 성공했을시 결과값을 result에 담음
        }).then(result => {
            setGameResultList((state)=>{
                // 기존 list state를 요소로 풀고, 새로운 배열 맨 뒤에 데이터를 넣는다.
                return [...state, result.data]
            })
        })
    }

    // playerNameList만큼 서버에 요청한다
    // async & await -> 자바스크립트의 비동기 처리 패턴 
    const startRandom= async ()=>{
        if(playerNameList.length<1){
            alert("사용자는 한명 이상이어야 합니다.")
            return false;
        }
        // 서버에 요청을 순서대로 한다. await 키워드가 있으면 비동기요청이여도 서버로부터 응답이 올때까지 기다린다.
        for (let i = 0 ; i < playerNameList.length ; i++){
            await getRandomResult(playerNameList[i]);
        }
        setGameStart(true);
        setIsInputScreen(false);
    }

    // 메인으로 가기
    const gameEnd = ()=>{
        setIsInputScreen(true);
        goMain()
    }

    // 실제 화면 부분
    return (
        <>
            {
                !gameStart ? (
                    <div>
                        <h3 className="subTitle">게임에 참가할 사람의 
                        <br/>
                        이름을 입력해주세요</h3>
                        <div className="centerWrapper" style={{flexDirection : "column"}}>
                            {/* 배열을 돌리는 반복문 */}
                            {playerNameList.map((playerName,index)=>{
                                return (<div key={index}>{playerName}</div>)
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
                        setPlayerNameList={setPlayerNameList}
                        gameEnd={gameEnd}
                    />
                )
            }
        </>
     );
}
 
export default PlayerContainer;