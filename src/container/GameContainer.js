import React, { useState, useEffect } from 'react';
import PlayerComponent from "../components/PlayerComponent";
import axios from "axios"

const GameContainer = (props) => {
    /*  
        isInputScreen이 true이면 점수입력화면이 나옴
        false일 점수결과화면 
    */

    // 상위 컴포넌트에서 props를 받아온다..
    const { playerList, setPlayerList, playerNameList, setPlayerNameList, gameResultList, setGameResultList, isInputScreen, setIsInputScreen, gameEnd} = props;

    // 게임 결과를 서버로부터 요청 
    const getPlayResult= (index)=> {
        axios({
            url: "http://localhost:8080/bow/start",
            method: "post",
            data: playerList[index]
        }).then(result => {
            setGameResultList((state)=>{
                return [...state, result.data]
            })
        })
    }

      // 서버에 요청을 순서대로 한다. await 키워드가 있으면 비동기요청이여도 서버로부터 응답이 올때까지 기다린다.
    const gameStart = async ()=>{
        for (let i = 0 ; i < playerList.length ; i++){
            await getPlayResult(i)
        }
        setIsInputScreen(false);
    }

    return (
        <>
            {isInputScreen ? (
                <>
                    {playerNameList.map((playerName,index)=>{
                        return(
                            <PlayerComponent key={index} setPlayerList={setPlayerList} playerName={playerName} playerList={playerList}/>
                        )
                    })}
                    <button onClick={()=>{
                        if(playerList.length<1){
                            alert("데이터를 먼저 저장해주세요.")
                            return false;
                        }
                        gameStart()
                    }}>보내기</button>
                </>
            ) : (
                <>
                    <div className="centerWrapper">
                        <strong style={{ fontSize: "30px" }}>BOWLING SCORE BOARD</strong>
                    </div>
                    {gameResultList.map((player,index)=>{
                        return(
                            <div className="itemCenter" key={index}>
                                <span className="nameStyle">
                                    {index+1}PLAYER {player.name}
                                </span>
                                <br />
                                <div className="scoreBox">
                                    {player.frameList.map((frame,index)=>{
                                        return(
                                            <div style={{margin:"10px"}} key={index}>
                                                <div>
                                                    {index+1}F
                                                </div>
                                                <hr/>
                                                {frame.turnScore.map((score, index)=>{

                                                    let renderScore = score;
                                                    {/* 스코어 화면에서 스트라이크일 경우 x 거터일 경우 - 스페어처리일 경우 / 로 표현*/}
                                                    if(score === 10){
                                                        renderScore = "X";
                                                    }else if(score === 0){
                                                        renderScore = "-";
                                                    }else if(index === 1 && frame.turnScore[0]+frame.turnScore[1] === 10){
                                                        renderScore = "/";
                                                    }
                                                    if(index !== 0){
                                                        renderScore = <><span style={{color:"#C12D39"}}> | </span><span>{renderScore}</span></>
                                                    }

                                                    return <span key={index}>{renderScore}</span>
                                                })}
                                                <hr/>
                                                {frame.frameScore}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div className={"centerWrapper"}>
                        <button onClick={()=>{
                            gameEnd()
                            setPlayerList([]);
                            setPlayerNameList([]);
                            setGameResultList([]);
                        }}>메인으로</button>
                    </div>
                </>
            ) }
        </>
    );
}

export default GameContainer;