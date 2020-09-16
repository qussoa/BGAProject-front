import React, {useState, useEffect} from 'react';

const UserSelect = (props) => {

    const { setUser, userList, addUser } = props;

    const [userName, setUserName] = useState("")
    const handleInput = (e)=>{
        setUserName(e.target.value)
    }
   
    return ( 

        <div>
            여긴 유저 선택 컴포넌트
            <div>
                {userList.map(item=>{
                    return (
                        <div>
                            {item}
                        </div>
                    )
                })}
            </div>

            <div>
                <input onChange={handleInput} value={userName}/><button onClick={()=>{
                    addUser(userName)
                    setUserName("")
                }}>추가하기</button>
            </div>

            <button onClick={setUser}>
                게임 시작하기
            </button>
        </div>

     );
}
 
export default UserSelect;