import React from 'react';

const Game = (props) => {

    const { endGame, userList } = props;

    return ( 

        <div>
            여긴 게임 컴포넌트
            <div>
                참가한 유저
            </div>
            <div>
                {userList.map(user=>{
                    return(
                        <>
                            <div>{user}님</div>
                        </>
                    )
                })}
            </div>
            <button onClick={endGame}>
                게임 종료
            </button>
        </div>

     );
}
 
export default Game;