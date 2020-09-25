import React, { useState, useEffect } from 'react';
import PlayerComponent from "../components/PlayerComponent";
import axios from "axios"

const GameContainer = (props) => {

    const { playerList, setPlayerList, playerNameList, gameResultList, setGameResultList, isInputScreen, setIsInputScreen } = props;

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
                    {playerNameList.map(playerName=>{
                        return(
                            <PlayerComponent setPlayerList={setPlayerList} playerName={playerName} playerList={playerList}/>
                        )
                    })}
                    <button onClick={gameStart}>보내기</button>
                </>
            ) : (
                <>
                    <div className="centerWrapper">
                        <strong style={{ fontSize: "30px" }}>BOWLING SCORE BOARD</strong>
                    </div>
                    {gameResultList.map(player=>{
                        return(
                            <div>
                                <span>
                                    {player.name}
                                </span>
                                <br />
                                <div style={{display:"flex"}}>
                                    {player.frameList.map((frame,index)=>{
                                        return(
                                            <div style={{margin:"10px"}}>
                                                <div>
                                                    {index+1}F
                                                </div>
                                                <hr/>
                                                {frame.turnScore.map(score=>{
                                                    return <span>{score} </span>
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
                </>
            ) }
        </>
    );
}

export default GameContainer;