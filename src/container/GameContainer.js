import React, { useState } from 'react';

const GameContainer = (props) => {
    
    // const {playList} = props;

    const [playerList, setPlayerList] = useState(playerList)

    const playingGame = ()=>{
        playerList.find((item,index)=>{

        })
    }

    return (
        <>
            <div className="centerWrapper">
                <strong style={{fontSize:"30px"}}>BOWLING SCORE BOARD</strong>

            </div>
            <div>
                {
                    playerList.map(player=>{
                        return (
                            <div>
                                {player.name}
                                {player.round.map(item=>{
                                    return (
                                        <>
                                            <div>
                                                {item.hitpin.map(hit=>{
                                                    return (
                                                        <>
                                                            {hit}/
                                                        </>
                                                    )
                                                })}
                                                {item.roundScore}
                                            </div>
                                            
                                        </>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default GameContainer;