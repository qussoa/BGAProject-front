import React, { useState } from 'react';

const GameContainer = (props) => {

    const { player, setPlayer } = props;


    return (
        <>
            <div className="centerWrapper">
                <strong style={{ fontSize: "30px" }}>BOWLING SCORE BOARD</strong>

            </div>
            <div>
                <span>
                    {player.name}
                </span>
                <br />
                <div style={{display:"flex"}}>
                    {player.result.map((frame,index)=>{
                        console.log(frame)
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
        </>
    );
}

export default GameContainer;