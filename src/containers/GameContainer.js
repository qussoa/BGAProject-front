import React, {useState, useEffect} from 'react';
import UserSelect from "../components/UserSelect"
import Game from "../components/Game"
import Result from "../components/Result"

const GameContainer = () => {

    // 게임 상태
    const [isInputPlayerScreen, setIsInputPlayerScreen] = useState(true)
    const [isPlayingScreen, setIsPlayingScreen] = useState(false)
    const [isResultScreen, setIsResultScreen] = useState(false)

    // 유저 state
    const [userList, setUserList] = useState([]);
    const addUser = (value)=>{
        setUserList([...userList, value])
    }

    // func
    const setUser = ()=>{
        setIsInputPlayerScreen(false)
        setIsPlayingScreen(true)
    }

    const endGame = ()=>{
        setIsPlayingScreen(false)
        setIsResultScreen(true)
    }

    return ( 
        <>
            { 
                isInputPlayerScreen && (
                    <UserSelect setUser={setUser} userList={userList} addUser={addUser}/>
                )
            }
            {
                isPlayingScreen && (
                    <Game endGame={endGame} userList={userList}/>
                )
            }
            {
                isResultScreen && (
                    <Result/>
                )
            }
        </>
     );
}
 
export default GameContainer